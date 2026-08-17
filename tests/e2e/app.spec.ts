import { expect, test } from '@playwright/test'

test.describe('search', () => {
  test('opens with the keyboard and handles search', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.keyboard.press('ControlOrMeta+k')
    const input = page.getByRole('combobox')
    await expect(input).toBeVisible()

    await input.fill('test')
    await expect(page.getByText(/no results/i)).toBeVisible()
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
  test('renders progress page with empty state', async ({ page }) => {
    await page.goto('/progress')
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { name: /your progress/i })).toBeVisible()
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
  test('shows empty courses notice when no courses match', async ({ page }) => {
    await page.goto('/tutorials')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/no courses match those filters/i)).toBeVisible()
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

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
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
})
