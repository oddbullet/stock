import type { Ticker } from "../interface/ticker";
import type { StockData } from "./stockData";

// Look into interface inheritance for data
export class Stock implements Ticker {
    ticket_name: string;
    price: number;
    volume: string;
    average_volume: string;
    overnight_volume: string;
    open: number;
    today_high: number;
    today_low: number;
    week_high_52: number;
    week_low_52: number;
    pe_ratio: number;
    market_cap: string;
    div_yield: number;

    constructor(stockData: StockData){
            this.ticket_name = stockData.ticket_name;
            this.price = stockData.price
            this.volume = stockData.volume
            this.average_volume = stockData.average_volume
            this.overnight_volume = stockData.overnight_volume
            this.open = stockData.open
            this.today_high = stockData.today_high
            this.today_low = stockData.today_low
            this.week_high_52 = stockData.week_high_52
            this.week_low_52 = stockData.week_low_52
            this.pe_ratio = stockData.pe_ratio
            this.market_cap = stockData.market_cap
            this.div_yield = stockData.div_yield
    }

    // TODO: Improve in the future
    private updatePrice(): void {
        const num = Math.floor(Math.random() * 3) + 1 + Math.random()
        const total = Math.round((num + Number.EPSILON) * 100) /100

        if(Math.random() > 0.4) {
            this.price += total
        } else {
            this.price -= total
        }
    }

    private updateVolume() {
        throw new Error("Method not implemented.");
    }

    private updateOpen() {
        throw new Error("Method not implemented.");
    }

    private updateToday() {
        throw new Error("Method not implemented.");
    }

    private updateWeekPrice() {
        throw new Error("Method not implemented.");
    }

    private updatePERatio() {
        throw new Error("Method not implemented.");
    }

    private updateMarketCap() {
        throw new Error("Method not implemented.");
    }

    private updateDivYield() {
        throw new Error("Method not implemented.");
    }

    update(): void {
        this.updatePrice()
    }
}

