import { Stock } from "../class/stock";
import type { IStockData } from "../interface/IStockData";
import stockData from "../data/stock/stock.json";

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
