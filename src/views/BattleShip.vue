<template>
  <div class="about">
    <h1>Bienvenue sur le jeu de bataille navale</h1>
    <grid-battleship/>
    <ShipTemplate
    v-for="ship in this.listOfShip" :key="ship"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script>
import GridBattleship from "../components/GridBattleship.vue";
import ShipTemplate from "../components/ShipTemplate.vue";

export default {
  components: {ShipTemplate, GridBattleship},
}
</script>