import { test, expect } from '@playwright/test';
import { Homepage } from '../pom/Homepage';
import { DetailsPage } from '../pom/DetailsPage';

test.describe('Detailed View', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    
    await homepage.assertPageLoaded();
  });

  test('View product details', async ({ page }) => {
    const detailspage = new DetailsPage(page);

    const { textTitle, textRating, textPrice } = await homepage.selectCard();

    await detailspage.assertProductDetails(textTitle, textRating, textPrice);
  });
});
