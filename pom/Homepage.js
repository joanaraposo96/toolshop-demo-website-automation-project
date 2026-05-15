import { expect } from "@playwright/test";
import { text } from "node:stream/consumers";

export class Homepage {
    constructor(page){
        this.page = page;
        this.card = page.locator('.card');
        this.pointerMin = page.locator('.ngx-slider-span.ngx-slider-pointer.ngx-slider-pointer-min');
        this.pointerMax = page.locator('.ngx-slider-span.ngx-slider-pointer.ngx-slider-pointer-max');
        this.sliderBar = page.locator('.ngx-slider-span.ngx-slider-bar-wrapper.ngx-slider-selection-bar');
        this.minValue = page.locator('.ngx-slider-span.ngx-slider-bubble.ngx-slider-model-value');
        this.maxValue = page.locator('.ngx-slider-span.ngx-slider-bubble.ngx-slider-model-high');
    }

    async navigateToPage() {
        await this.page.goto('/')
    }

    async assertPageLoaded() {
        await expect(this.page).toHaveURL(/\/$/);
    }

    async selectCard() {
        const count = await this.card.count();
        const randomIndex = Math.floor(Math.random() * count);
        const card = this.card.nth(randomIndex)

        const textTitle= await card
            .locator('[data-test="product-name"]')
            .innerText();
        const textRating = await card
            .locator('.co2-letter.active')
            .innerText();
        const textPrice = await card
            .locator('[data-test="product-price"]')
            .innerText();

        await card.click();

        console.log(textTitle, textRating, textPrice);
        return { textTitle, textRating, textPrice };
    }

    async assertDefaultSliderValues() {
        const pointerMinValue = await this.pointerMin.getAttribute('aria-valuenow');
        const pointerMaxValue = await this.pointerMax.getAttribute('aria-valuenow');

        await expect(pointerMinValue).toBe('1');
        await expect(this.minValue).toHaveText(pointerMinValue);
        await expect(pointerMaxValue).toBe('100');
        await expect(this.maxValue).toHaveText(pointerMaxValue);
    }
}