import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyCheckoutPage() {
    await expect(this.page.locator('h4').first()).toContainText('Checkout');
  }

  async placeOrder() {
    await this.page.locator('a:has-text("Place Order")').click();
  }
}
