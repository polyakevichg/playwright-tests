import { test, expect, Page } from '@playwright/test';

const elements = [
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo link',
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs',
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'MCP', exact: true }),
    name: 'MCP',
  },
  {
    locator: (page: Page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js',
  },
  {
    locator: (page: Page) => page.getByRole('link', { name: 'CLI', exact: true }),
    name: 'CLI',
  },
  {
    locator: (page: Page) => page.getByLabel('Switch between dark and light'),
    name: 'light button',
  },
];
test.describe('тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  test('Проверка названия элементов отображения хэдера', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });
  test('Проверка правильного значения аттрибутов href', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
      'href',
      '/',
    );
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'MCP', exact: true })).toHaveAttribute(
      'href',
      '/mcp/introduction',
    );
    await expect(page.getByRole('button', { name: 'Node.js' })).toHaveAttribute('href', '#');
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toHaveAttribute(
      'href',
      '/agent-cli/introduction',
    );
  });
  test('Проверка изменения в темную тему', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await page.getByLabel('Switch between dark and light').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
  test('Проверка отображения корректного заголовка', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
      'Playwright enables reliable web automation for testing, scripting, and AI agents.',
    );
  });
  test('Проверка отображения Get Started кнопки', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  });
  test('Проверка отображения элементов навигации хэдера', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  });
});
