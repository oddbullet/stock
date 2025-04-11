/*

*/
export interface ITickerData {
    readonly ticket_name: string;
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
}
