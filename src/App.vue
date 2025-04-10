<script setup lang="ts">
import { Stock } from './class/stock';
import { StockData } from './class/stockData';

let y: StockData = new StockData("B", 1.11, 12, 12, 12,12, 12, 12, 12, 12, 12, 12, 12)

let x: Stock = new Stock(y)

for (let index = 0; index < 100; index++) {
    x.update()
}

</script>

<template>
    Hello
</template>

<style scoped>
</style>
