import { defineConfig, devices } from '@playwright/test'

/**
 * E2E tests run against the built output, not the dev server, because the
 * things worth testing here — prerendering, hydration, code splitting — only
 * exist after a production build.
 *
 * `vite preview` cannot be used: it applies the SPA fallback before looking
 * for nested index.html files, so prerendered routes never get served. The
 * custom static server mirrors how Vercel and Netlify resolve files.
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],

  use: {
    baseURL: 'http://localhost:4180',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],

  webServer: {
    command: 'node tests/e2e/static-server.mjs 4180',
    url: 'http://localhost:4180',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
})
