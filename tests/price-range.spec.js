import { test } from '@playwright/test';
import { Homepage } from '../pom/Homepage';
import { DetailsPage } from '../pom/DetailsPage';

test.describe('Price Range', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    
    await homepage.assertPageLoaded();
    await homepage.assertDefaultSliderValues();
  });

  test('Select a price range', async ({ page }) => {
    await homepage.selectRange(0.25);

    const minPrice = await homepage.getDisplayedMinPrice();

    await homepage.assertPriceRangeValues(minPrice);
  });
});