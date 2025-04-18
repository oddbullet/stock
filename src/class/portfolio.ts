import type { IBoughtStock } from "../interface/IBoughtStock"
import type { ISellStock } from "../interface/ISellStock"

export class Portfolio {
    buying_power: number
    total_value: number

    stocks: {[key: string]: IBoughtStock }

    constructor() {
        this.buying_power = 0
        this.total_value = 0
        this.stocks = {}
    }

    updateBuyingPower(): void {
        throw new Error("Not Implemented")
    }

    private updateTotalValue(): void {
        Object.values(this.stocks).forEach((stock) => {
            this.total_value += stock.number_share * this.getStockPrice(stock.ticket_name)
        })
    }

    buyStock(stock: IBoughtStock): void {
        const ticketName = stock.ticket_name
        if (this.stocks[ticketName] === null) {
            this.stocks[ticketName] = stock
        } else {
            this.stocks[ticketName].number_share += stock.number_share
        }
    }

    sellStock(stock: ISellStock): void {
        throw new Error("Not Implemented")
    }

    getStockPrice(ticketName: string): number {
        throw new Error("Not Implemented")
    }
}
