import type { ITicker } from "../interface/ITicker";
import type { ITickerData } from "../interface/ITickerData";

export class Market {
    tickers: ITicker<ITickerData>[]
    
    constructor(tickers: ITicker<ITickerData>[]) {
        this.tickers = tickers
    }

    update() {
        this.tickers.forEach((ticker) => {
            console.table(ticker.tickerData.ticket_name)
            ticker.update()
        })
    }
}
