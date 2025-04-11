import type { ITickerData } from "./ITickerData";

/*

*/
export interface ITicker<T extends ITickerData> {
    tickerData: T

    update(): void;
}
