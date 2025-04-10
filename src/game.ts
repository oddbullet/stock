import { loadStock } from "./function/loader"
import type { Ticker } from "./interface/ticker"


export class Game {
    GlobalObject: Ticker[] = []

    constructor(){}

    initialize() {
        this.GlobalObject = this.GlobalObject.concat(loadStock())
    }
    
    update() {
        this.GlobalObject.forEach(function(ticker) {
            console.log(ticker.ticket_name)
            ticker.update()
        });
    }
}
