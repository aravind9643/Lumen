import { expect, test } from '@playwright/test'

/**
 * Visual regression: catches an accidental gradient fill, a broken accent
 * theme, or a layout shift that no functional assertion would notice. Kept
 * deliberately small — a few key surfaces, not every page — since screenshot
 * tests are expensive to maintain and go stale the moment content changes.
 *
 * Baselines live in `visual.spec.ts-snapshots/` (generated on first run with
 * `npm run test:e2e -- --update-snapshots`). They are platform-specific, so
 * regenerate locally on the same OS as CI if this starts failing spuriously.
 *
 * `maxDiffPixelRatio` tolerates sub-pixel text antialiasing differences
 * between runs on the same machine — real regressions (colour, layout,
 * missing elements) are orders of magnitude larger than that noise floor.
 */
const screenshotOptions = { fullPage: true, animations: 'disabled' as const, maxDiffPixelRatio: 0.02 }

test.describe('visual regression', () => {
  test('homepage, light and dark', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('home-light.png', screenshotOptions)

    await page.evaluate(() => localStorage.setItem('theme:mode', JSON.stringify('dark')))
    await page.reload()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('home-dark.png', screenshotOptions)
  })

  test('tutorials listing grid', async ({ page }) => {
    await page.goto('/tutorials')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('tutorials-grid.png', screenshotOptions)
  })
})
