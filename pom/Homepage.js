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
        const card = this.card.nth(randomIndex);
        const text = await card.locator('h5[data-test="product-name"]').innerText();

        await card.click();

        return text;
    }
}