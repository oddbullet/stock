interface BoughtStockData {
    readonly ticket_name: string
    number_share: number
    total_value: number
}

export class Portfolio {
    buying_power: number
    total_value: number

    stocks: BoughtStockData[]

    constructor() {
        this.buying_power = 0
        this.total_value = 0
        this.stocks = []
    }

    updateBuyingPower(): void {
        throw new Error("Not Implemented")
    }

    private updateTotalValue(): void {
        throw new Error("Not Implemented")
    }

    buyStock(): void {
        throw new Error("Not Implemented")
    }

    sellStock() {
        throw new Error("Not Implemented")
    }
}
