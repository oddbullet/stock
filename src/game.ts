import { loadStock } from "./function/loader"
import type { ITicker } from "./interface/ITicker"
import type { ITickerData } from "./interface/ITickerData";


export class Game {
    GlobalObject: ITicker<ITickerData>[] = []

    constructor(){}

    initialize() {
        this.GlobalObject = this.GlobalObject.concat(loadStock())
    }
    
    update() {
        this.GlobalObject.forEach(function(ticker) {
            console.log(ticker.tickerData.ticket_name)
            ticker.update()
        });
    }
}
