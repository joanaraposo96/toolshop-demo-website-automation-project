export class Homepage {
    constructor(page){
        this.page = page;
        this.card = page.locator('.card');
    }

    async navigateToPage() {
        await this.page.goto('/')
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
}