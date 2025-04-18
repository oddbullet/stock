import { Stock } from "../class/stock";
import type { IStockData } from "../interface/IStockData";
import stockData from "../data/stock/stock.json";
import { Market } from "../class/market";


export function loadMarket(): Market {
    return new Market(loadStock())
}

export function loadStock(): Stock[] {

    const jsonFile: IStockData[] = stockData
    const stocks: Stock[] = []


    jsonFile.forEach(function(stockData: IStockData) {
        const stock: Stock = new Stock(stockData)
        stocks.push(stock)
    })

    return stocks
}

export function loadETF() {
    throw new Error("Not Implemented")
}

export function loadPlayer() {
    throw new Error("Not Implmented")
}
