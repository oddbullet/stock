import { loadMarket, loadStock } from "./function/loader"
import type { IGameObject } from "./interface/IGameObject";


export class Game {
    GlobalObject: IGameObject[] = []

    constructor(){}

    initialize() {
        this.GlobalObject.push(loadMarket())
    }
    
    update() {
        this.GlobalObject.forEach(function(gameObject) {
            gameObject.update()
        });
    }
}
