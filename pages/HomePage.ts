import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.automationexercise.com/');
    await this.page.waitForTimeout(3000);
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async goToProducts() {
    await this.page.locator('a[href="/products"]').click();
    await expect(this.page).toHaveURL(/products/);
  }
}
