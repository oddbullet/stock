import type { ITickerData } from "./ITickerData";

export interface IStockData extends ITickerData {
    market_cap: string;
    div_yield: number;
}
