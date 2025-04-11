import { Stock } from "../class/stock";
import type { StockData } from "../class/stockData";
import stockData from "../data/stock/stock.json";

export function loadStock(): Stock[] {

    const jsonFile: StockData[] = stockData
    const stocks: Stock[] = []


    jsonFile.forEach(function(stockData: StockData) {
        const stock: Stock = new Stock(stockData)
        stocks.push(stock)
    })

    return stocks
}

export function loadETF() {
    throw new Error("Not Implemented")
}
