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
    const { capitalized, oldResult } = await homepage.selectCheckBox('sander');

    await homepage.assertNewResults(oldResult);
    await homepage.assertSearchResults(capitalized);
  });
});