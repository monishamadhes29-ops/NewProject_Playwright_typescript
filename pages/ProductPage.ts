import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.locator('#search_product').fill(product);
    await this.page.locator('#submit_search').click();
    //await this.page.waitForTimeout(30000);
    await expect(this.page.locator('//h2[text()="Searched Products"]')).toBeVisible();
  }

  async verifySearchResult(product: string) {
    await expect(this.page.locator('.productinfo p').first())
      .toContainText(product);
  }

  async addFirstProductToCart() {
    const addToCart = this.page.locator('a[data-product-id="3"]').first();
    await addToCart.scrollIntoViewIfNeeded();
    await addToCart.hover();
    await addToCart.click();
    await this.page.locator('button:has-text("Continue Shopping")').click();
  }
}
