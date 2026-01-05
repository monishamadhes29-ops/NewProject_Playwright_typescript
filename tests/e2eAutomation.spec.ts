import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('E2E flow – search product, add to cart, checkout', async ({ page }) => {
  const home = new HomePage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.navigate();
  await home.goToProducts();

  await products.searchProduct('Dress');
  await products.verifySearchResult('Dress');
  await products.addFirstProductToCart();

  await cart.openCart();
  await cart.proceedToCheckout();

  await checkout.verifyCheckoutPage();
});
