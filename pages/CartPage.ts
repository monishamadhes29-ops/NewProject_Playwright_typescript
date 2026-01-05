import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.locator('a[href="/view_cart"]').first().click();
    await expect(this.page.locator('#cart_info_table')).toBeVisible();
  }

  async proceedToCheckout() {
    await this.page.locator('a:has-text("Proceed To Checkout")').click();
    await expect(this.page.locator('h4').first()).toContainText('Checkout');
  }
}
