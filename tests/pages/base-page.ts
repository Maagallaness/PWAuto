import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage class that contains common methods and properties for all page objects
 */
export class BasePage {
  readonly page: Page;

  /**
   * @param page Playwright page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   * @param url URL to navigate to
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Wait for navigation to complete
   */
  async waitForNavigation(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get page title
   * @returns Page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Check if element is visible
   * @param locator Element locator
   * @returns True if element is visible
   */
  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  /**
   * Click on element
   * @param locator Element locator
   */
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Fill input field
   * @param locator Element locator
   * @param text Text to fill
   */
  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /**
   * Get text from element
   * @param locator Element locator
   * @returns Text content
   */
  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }
}