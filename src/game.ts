import { Stock } from "./class/stock"
import { StockData } from "./class/stockData"
import type { Ticker } from "./interface/ticker"


export class Game {
    GlobalObject: Ticker[] = []

    constructor(){}

    initialize() {
        let y: StockData = new StockData("B", 1.11, 12, 12, 12,12, 12, 12, 12, 12, 12, 12, 12)
        let x: Stock = new Stock(y)
    
        this.GlobalObject.push(x)
    }
    
    update() {
        this.GlobalObject.forEach(function(ticker) {
            ticker.update()
        });
    }
}
