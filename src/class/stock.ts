import type { ITicker } from "../interface/ITicker";
import type { IStockData } from "../interface/IStockData";

export class Stock implements ITicker<IStockData> {
    tickerData: IStockData

    constructor(stockData: IStockData){
            this.tickerData = stockData
    }

    // TODO: Improve in the future
    private updatePrice(): void {
        const num = Math.floor(Math.random() * 3) + 1 + Math.random()
        const total = Math.round((num + Number.EPSILON) * 100) /100

        if(Math.random() > 0.4) {
            this.tickerData.price += total
        } else {
            this.tickerData.price -= total
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

