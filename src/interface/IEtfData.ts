import type { ITickerData } from "./ITickerData";

export interface IEtfData extends ITickerData {
    aum: number;
    expense_ratio: number;
    day_ratio_30: number;
}
