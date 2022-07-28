<template>
  <div class="flex flex-col">
    <div class="about">
      <h1>Bienvenue sur le jeu de bataille navale</h1>
      <grid-battleship/>
      <ShipTemplate
          v-for="ship in this.listOfShip" :key="ship"/>
      <PlaceShip/>
    </div>

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
import PlaceShip from "../components/PlaceShip.vue";

export default {
  components: {PlaceShip, ShipTemplate, GridBattleship},
}
</script>