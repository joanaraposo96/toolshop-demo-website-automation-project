import { test } from '@playwright/test';
import { Homepage } from '../pom/Homepage';

test.describe('Filtering results', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    
    await homepage.assertPageLoaded();
  });

  test('Filter results by product type', async ({ page }) => {
    const label = await homepage.selectCheckBox('sander');
    await page.waitForTimeout(3000);

    await homepage.assertSearchResults(label);
  });
});