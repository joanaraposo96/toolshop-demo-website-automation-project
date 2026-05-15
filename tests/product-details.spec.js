import { test, expect } from '@playwright/test';
import { Homepage } from '../pom/Homepage';
import { DetailsPage } from '../pom/DetailsPage';

test.describe('Detailed View', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    await expect(page).toHaveURL(/\/$/);
  });

  test('View product details', async ({ page }) => {
    const { textTitle, textRating, textPrice } = await homepage.selectCard();
    const detailspage = new DetailsPage(page);

    await detailspage.assertTitle(textTitle, textRating, textPrice);
  });
});
