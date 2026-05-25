import { test } from '@playwright/test';
import { Homepage } from '../pom/Homepage';
import { TIMEOUT } from 'node:dns';

test.describe('Filtering results', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);

    await homepage.navigateToPage();
    
    await homepage.assertPageLoaded();
  });

  test('Filter results by product type', async ({ page }) => {
    const { oldResult, newResult } = await homepage.selectCheckBox('sander');

    await homepage.assertUpdatedResults(oldResult);
    await homepage.assertSearchResults(newResult);
  });
});