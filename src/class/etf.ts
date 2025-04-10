import type { Ticker } from "../interface/ticker";

export class Etf implements Ticker {
    ticket_name: string;
    price: number;
    volume: number;
    overnight_volume: number;
    open: number;
    today_high: number;
    today_low: number;
    week_high_52: number;
    week_low_52: number;
    pe_ratio: number;
    aum: number;
    expense_ratio: number;
    day_ratio_30: number;

    constructor(
        ticket_name: string,
        price: number,
        volume: number,
        overnight_volume: number,
        open: number,
        today_high: number,
        today_low: number,
        week_high_52: number,
        week_low_52: number,
        pe_ratio: number,
        aum: number,
        expense_ratio: number,
        day_ratio_30: number){
            this.ticket_name = ticket_name
            this.price = price
            this.volume = volume
            this.overnight_volume = overnight_volume
            this.open = open
            this.today_high = today_high
            this.today_low = today_low
            this.week_high_52 = week_high_52
            this.week_low_52 = week_low_52
            this.pe_ratio = pe_ratio
            this.aum = aum
            this.expense_ratio = expense_ratio
            this.day_ratio_30 = day_ratio_30
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
    
}