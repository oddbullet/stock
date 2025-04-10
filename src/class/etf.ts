import type { Ticker } from "../interface/ticker";
import type { EtfData } from "./etfData";

export class Etf implements Ticker {
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
    aum: number;
    expense_ratio: number;
    day_ratio_30: number;

    constructor(etfData: EtfData){
            this.ticket_name = etfData.ticket_name
            this.price = etfData.price
            this.volume = etfData.volume
            this.average_volume = etfData.average_volume
            this.overnight_volume = etfData.overnight_volume
            this.open = etfData.open
            this.today_high = etfData.today_high
            this.today_low = etfData.today_low
            this.week_high_52 = etfData.week_high_52
            this.week_low_52 = etfData.week_low_52
            this.pe_ratio = etfData.pe_ratio
            this.aum = etfData.aum
            this.expense_ratio = etfData.expense_ratio
            this.day_ratio_30 = etfData.day_ratio_30
    }

    updatePrice(): void {
        throw new Error("Method not implemented.");
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
    
}