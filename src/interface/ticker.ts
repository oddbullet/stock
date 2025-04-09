interface Ticker {
    readonly ticket_name: string;
    price: number;
    volume: number;
    overnight_volume: number;
    open: number;
    today_high: number;
    today_low: number;
    week_high_52: number;
    week_low_52: number;
    pe_ratio: number;

    update(): void;
}
