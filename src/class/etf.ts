import type { ITicker } from "../interface/ITicker";
import type { IEtfData } from "../interface/IEtfData";

export class Etf implements ITicker<IEtfData> {
    tickerData: IEtfData;

    constructor(etfData: IEtfData) {
        this.tickerData = etfData
    }

    updatePrice(): void {
        throw new Error("Method not implemented.");
    }

    update(): void {
        throw new Error("Method not implemented.");
    }
    
}