import { expect, test } from '@playwright/test'

test.describe('search', () => {
  test('opens with the keyboard, is a combobox, and navigates', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.keyboard.press('ControlOrMeta+k')
    const input = page.getByRole('combobox')
    await expect(input).toBeVisible()

    await input.fill('token')
    const options = page.getByRole('option')
    await expect(options.first()).toBeVisible()

    // Arrow keys move aria-activedescendant, which is what a screen reader
    // announces — the highlight alone is not enough.
    const first = await input.getAttribute('aria-activedescendant')
    await page.keyboard.press('ArrowDown')
    await expect(input).not.toHaveAttribute('aria-activedescendant', first ?? '')

    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/\/tutorials\/.+\/.+/)
  })

  test('restores focus to the trigger on close', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const trigger = page.getByRole('button', { name: 'Search' })
    await trigger.focus()
    await page.keyboard.press('ControlOrMeta+k')
    await expect(page.getByRole('combobox')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(page.getByRole('combobox')).toBeHidden()
    await expect(trigger).toBeFocused()
  })

  test('reports when nothing matches', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.keyboard.press('ControlOrMeta+k')
    await page.getByRole('combobox').fill('zzzznotarealterm')
    await expect(page.getByText(/no results/i)).toBeVisible()
  })
})

test.describe('progress', () => {
  test('marking complete persists across navigation', async ({ page }) => {
    await page.goto('/tutorials/ai-fundamentals/what-is-ai')
    await page.waitForLoadState('networkidle')

    await page.getByRole('button', { name: /mark complete/i }).click()
    await expect(page.getByRole('button', { name: /completed/i })).toBeVisible()

    await page.goto('/progress')
    await expect(page.getByText('1/21')).toBeVisible()
    await expect(page.getByText(/pick up where you left off/i)).toBeVisible()
  })

  test('bookmarks appear on the progress page and can be removed', async ({ page }) => {
    await page.goto('/tutorials/ai-fundamentals/what-is-ai')
    await page.waitForLoadState('networkidle')
    await page.getByRole('button', { name: /^save$/i }).click()
    await expect(page.getByRole('button', { name: /saved/i })).toBeVisible()

    await page.goto('/progress')
    const saved = page.getByRole('heading', { name: 'What Artificial Intelligence Actually Is' })
    await expect(saved).toBeVisible()

    await page.getByRole('button', { name: /remove .* from saved/i }).click()
    await expect(saved).toBeHidden()
  })
})

test.describe('theming', () => {
  test('toggles dark mode and remembers it', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const html = page.locator('html')
    const wasDark = await html.evaluate((el) => el.classList.contains('dark'))
    await page.getByRole('button', { name: /switch to (dark|light) mode/i }).click()
    await expect
      .poll(() => html.evaluate((el) => el.classList.contains('dark')))
      .toBe(!wasDark)

    await page.reload()
    await page.waitForLoadState('networkidle')
    expect(await html.evaluate((el) => el.classList.contains('dark'))).toBe(!wasDark)
  })

  test('accent colour applies and the panel closes on Escape', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const trigger = page.getByRole('button', { name: /appearance settings/i })
    await trigger.click()
    const panel = page.getByRole('dialog', { name: /appearance settings/i })
    await expect(panel).toBeVisible()

    await page.getByRole('button', { name: /emerald accent/i }).click()
    await expect(page.locator('html')).toHaveAttribute('data-accent', 'emerald')

    await page.keyboard.press('Escape')
    await expect(panel).toBeHidden()
    await expect(trigger).toBeFocused()
  })
})

test.describe('category browsing', () => {
  test('groups by subject and filters', async ({ page }) => {
    await page.goto('/tutorials')
    await page.waitForLoadState('networkidle')

    await expect(page.getByRole('heading', { name: /artificial intelligence/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /web development/i })).toBeVisible()
    await expect(page.locator('article')).toHaveCount(4)

    await page.getByRole('button', { name: 'Web Development', exact: true }).click()
    await expect(page.locator('article')).toHaveCount(1)

    await page.getByRole('button', { name: /all subjects/i }).click()
    await expect(page.locator('article')).toHaveCount(4)
  })
})

test.describe('resilience', () => {
  test('works with localStorage blocked', async ({ page }) => {
    // Safari private mode and blocked-cookie setups throw on every access.
    await page.addInitScript(() => {
      const boom = () => {
        throw new DOMException('SecurityError')
      }
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        get: () => ({ getItem: boom, setItem: boom, removeItem: boom, clear: boom, key: boom, length: 0 }),
      })
    })

    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('/tutorials/ai-fundamentals/what-is-ai')
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    await page.getByRole('button', { name: /mark complete/i }).click()
    expect(errors, errors[0]).toHaveLength(0)
  })

  test('recovers from corrupt stored state', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('progress:v1', '{not valid json')
      localStorage.setItem('theme:font-scale', '"not-a-number"')
    })
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('/progress')
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { name: /your progress/i })).toBeVisible()
    expect(errors, errors[0]).toHaveLength(0)
  })

  test('shows a recovery page when a lazy chunk fails to load', async ({ page }) => {
    // The stale-deploy case: old HTML requesting chunks that no longer exist.
    await page.route('**/assets/Lesson-*.js', (r) => r.abort())
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.evaluate(() => {
      const a = document.createElement('a')
      a.href = '/tutorials/ai-fundamentals/what-is-ai'
      document.body.appendChild(a)
      a.click()
    })

    await expect(page.getByText(/needs refreshing|went wrong/i)).toBeVisible({ timeout: 10_000 })
    await expect(page.getByRole('button', { name: /reload/i })).toBeVisible()
  })
})
