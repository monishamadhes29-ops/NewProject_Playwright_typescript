# Playwright E2E Automation – AutomationExercise

This project contains an end-to-end (E2E) UI automation framework built using **Playwright with TypeScript**, following the **Page Object Model (POM)** design pattern.

## 🚀 Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## 📂 Project Structure
pages/
HomePage.ts
ProductsPage.ts
CartPage.ts
CheckoutPage.ts
tests/
e2e.spec.ts
playwright.config.ts


## ✅ Test Coverage
- Navigate to AutomationExercise website
- Search for a product
- Validate search results
- Add product to cart
- View cart
- Proceed to checkout (simulation)

## ▶️ How to Run Tests
1. Install dependencies:
npm install
2. Run all tests:
npx playwright test
3. Run tests in headed mode:
npx playwright test --headed

## 📊 Test Reports
Playwright HTML reports are generated automatically.
npx playwright show-report


## 🧠 Key Highlights
- Uses Playwright auto-waits and assertions
- Reduced and clean POM implementation
- Stable locators with strict mode handling
- CI-ready framework

## 👤 Author
Monisha Madheswaran  
Senior QA Automation Engineer
