import { test, expect } from '@playwright/test';
import { Homepage } from '../pom/Homepage';

test.describe('Detailed View', () => {
  let homepage;
  let selectedProduct;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    await expect(page).toHaveURL(/\/$/);
  });

  test('View product details', async ({ page }) => {
    selectedProduct = await homepage.selectCard();
  });
});
