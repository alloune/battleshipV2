<template>
  <div class="flex flex-row">
  <ShipTemplate v-for="ship in ships.listOfShip" :ship="ship"/>
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
  components: {ShipTemplate}
}
</script>

<style scoped>

</style>