<template>
  <div class="flex flex-col">
    <div class="about">
      <h1>Bienvenue sur le jeu de bataille navale</h1>
      <grid-battleship/>
      <ShipTemplate
          v-for="ship in this.listOfShip" :key="ship"/>
      <ShipListing />
      <PlaceShip/>
    </div>
<button @click="reset">Reset</button>
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
import ShipListing from "../components/ShipListing.vue";
import {useShipList} from "../Ships/ShipList";

export default {
  components: {ShipListing, PlaceShip, ShipTemplate, GridBattleship},
  data(){
    return{
      shipList: useShipList(),
    }
  },
  methods: {
    reset() {
      this.shipList.$reset();
    },
  }
}
</script>