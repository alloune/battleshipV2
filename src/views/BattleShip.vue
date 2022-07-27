<template>
  <div class="about">
    <h1>Bienvenue sur le jeu de bataille navale</h1>
    <grid-battleship/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import GridBattleship from "../components/GridBattleship.vue";
export default {
  components: {GridBattleship}
}
</script>