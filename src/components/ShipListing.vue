<template>
  <div class="flex flex-row">
  <ShipTemplate v-for="ship in placeableShips" :ship="ship"/>
  </div>
</template>

<script>
import ShipTemplate from "./ShipTemplate.vue";
import {useShipList} from "../Ships/ShipList.js";
export default {
  name: "ShipListing",
  data() {
    return {
      ships: useShipList(),
    }
  },
  components: {ShipTemplate},
  computed: {
    placeableShips() {
      return this.ships.listOfShip.filter(element => !element.position.length)
    }
  }
}
</script>

<style scoped>

</style>