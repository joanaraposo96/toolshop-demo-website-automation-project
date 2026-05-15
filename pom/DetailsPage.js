import { expect } from "@playwright/test";

export class DetailsPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('[data-test="product-name"]');
        this.rating = page.locator('.co2-letter.active');
        this.price = page.locator('.price-section');
    }

    async assertTitle(title, rating, price) {
        const text = await this.title.innerText();
        
        await expect(this.title).toHaveText(title);
        await expect(this.rating).toHaveText(rating);
        await expect(this.price).toHaveText(price);
    } 
}