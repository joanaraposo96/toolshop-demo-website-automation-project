export class Homepage {
    constructor(page){
        this.page = page;
    }

    async navigateToPage() {
        await this.page.goto('/')
    }

    async selectCard() {
        const locator = page.locator(`a[data-test="product-${id}"]`)
        const count = await this.card.count();
        const randomIndex = Math.floor(Math.random() * count);
        const productText = await this.card.nth(randomIndex).textContent();

        console.log(count);

        await this.card.nth(randomIndex).click();

        return productText;
    }
}