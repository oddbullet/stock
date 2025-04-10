<script setup lang="ts">
import { Game } from './game';

const game: Game = new Game()
game.initialize()

for (let index = 0; index < 100; index++) {
    game.update()
}

</script>

<template>
    Hello
</template>

<style scoped>
</style>
