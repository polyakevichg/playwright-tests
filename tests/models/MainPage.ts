import { Page } from '@playwright/test';

class MainPage {
  readonly page: Page;
  readonly elements;
  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
        name: 'Playwright logo link',
        text: 'Playwright',
      },
      {
        locator: (page: Page) => page.getByRole('link', { name: 'Docs' }),
        name: 'Docs',
        text: 'Docs',
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
  }
}
