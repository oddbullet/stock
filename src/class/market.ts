import { loadStock } from "../function/loader";
import type { ITicker } from "../interface/ITicker";
import type { ITickerData } from "../interface/ITickerData";

export class Market {
    tickers: ITicker<ITickerData>[]

    static #instance: Market
    
    private constructor(tickers: ITicker<ITickerData>[]) {
        this.tickers = tickers
    }

    static get instance(): Market {
        if (!Market.#instance) {
            Market.#instance = new Market(loadStock())
        }
        
        return Market.#instance
    }

    returnPrice(ticker_name: string): number {
        throw new Error("Not Implemented")
    }

    changeEvent(): void {
        throw new Error("Not Implemented")
    }

    returnTicker() {
        return this.tickers
    }

    update() {
        this.tickers.forEach((ticker) => {
            console.table(ticker.tickerData.ticket_name)
            ticker.update()
        })
    }
}
