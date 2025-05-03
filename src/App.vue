<script setup lang="ts">
import { Market } from './class/market';
import { Game } from './game';

const game: Game = new Game()
game.initialize()

let market = Market.instance

// This would be a setInterval.
for (let index = 0; index < 10; index++) {
    game.update()
}

</script>

<template>
    <li>

    </li>
</template>

<style scoped>
</style>
