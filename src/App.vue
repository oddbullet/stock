<script setup lang="ts">
import { Game } from './game';

const game: Game = new Game()
game.initialize()

// This would be a setInterval.
for (let index = 0; index < 10; index++) {
    game.update()
}

</script>

<template>
    Hello
</template>

<style scoped>
</style>
