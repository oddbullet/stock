import type { Ticker } from "../interface/ticker";
import type { StockData } from "./stockData";

export class Stock implements Ticker {
    ticket_name: string;
    price: number;
    volume: number;
    average_volume: number;
    overnight_volume: number;
    open: number;
    today_high: number;
    today_low: number;
    week_high_52: number;
    week_low_52: number;
    pe_ratio: number;
    market_cap: number;
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

    private updatePrice() {
        this.price += 1
    }

    update(): void {
        this.updatePrice()
        console.log(this.price)
    }
}

