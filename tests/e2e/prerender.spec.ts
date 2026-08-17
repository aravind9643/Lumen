import { expect, test } from '@playwright/test'

/**
 * Prerendering is invisible when it breaks: pages still build and deploy, they
 * just contain the bare shell. These tests run with JavaScript disabled, which
 * is what a crawler or social scraper actually sees.
 */
test.describe('static HTML (no JavaScript)', () => {
  test.use({ javaScriptEnabled: false })

  const routes = [
    { path: '/', contains: 'Learn how things' },
    { path: '/tutorials', contains: 'All tutorials' },
    { path: '/tutorials/generative-ai', contains: 'Generative AI Engineer' },
    { path: '/tutorials/generative-ai/what-is-ai-and-machine-learning', contains: 'Machine Learning' },
    { path: '/tutorials/generative-ai/interview-preparation', contains: 'Interview' },
    { path: '/about', contains: 'About' },
    { path: '/privacy', contains: 'Privacy' },
  ]

  for (const { path, contains } of routes) {
    test(`${path} ships real content`, async ({ page }) => {
      await page.goto(path)
      const text = await page.locator('body').innerText()
      expect(text.length, `${path} rendered only ${text.length} chars`).toBeGreaterThan(500)
      expect(text).toContain(contains)
    })
  }

  test('each route has its own title and canonical URL', async ({ page }) => {
    const seen = new Set<string>()
    for (const { path } of routes) {
      await page.goto(path)
      const title = await page.title()
      expect(title.length).toBeGreaterThan(0)
      seen.add(title)

      const canonical = await page.locator('link[rel=canonical]').getAttribute('href')
      expect(canonical, `${path} canonical`).toContain(path === '/' ? '' : path)
    }
    // A shared title everywhere means head tags were not applied per route.
    expect(seen.size).toBe(routes.length)
  })

  test('lesson pages carry structured data', async ({ page }) => {
    await page.goto('/tutorials/generative-ai/fine-tuning-and-rag')
    const blocks = page.locator('script[type="application/ld+json"]')
    await expect(blocks).toHaveCount(1)

    const graph = JSON.parse((await blocks.first().textContent()) ?? '{}')['@graph']
    const types = graph.map((n: { '@type': string }) => n['@type'])
    expect(types).toContain('LearningResource')
    expect(types).toContain('BreadcrumbList')
    expect(graph[0].timeRequired).toMatch(/^PT\d+M$/)
  })

  test('og tags are route-specific', async ({ page }) => {
    await page.goto('/tutorials/generative-ai/what-is-ai-and-machine-learning')
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article')
    const desc = await page.locator('meta[name=description]').getAttribute('content')
    expect(desc).toMatch(/AI|machine learning|jargon/i)
  })
})

test.describe('hydration', () => {
  test('attaches without errors and stays interactive', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (m) => {
      const t = m.text()
      if (m.type() === 'error' && !/adsbygoogle|googlesyndication|favicon/i.test(t)) errors.push(t)
    })

    await page.goto('/tutorials/generative-ai/what-is-ai-and-machine-learning')
    await page.waitForLoadState('networkidle')

    // A hydration mismatch surfaces as React error #418/#423.
    expect(errors, errors[0]).toHaveLength(0)

    const options = page.getByRole('radio')
    await options.first().scrollIntoViewIfNeeded()
    await options.nth(1).click()
    await expect(page.getByText(/Correct\.|Not quite\./)).toBeVisible()
  })

  test('client-side navigation works after hydration', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.getByRole('link', { name: /browse all courses/i }).click()
    await expect(page).toHaveURL(/\/tutorials$/)
    await expect(page.getByRole('heading', { name: 'All tutorials' })).toBeVisible()
  })
})
