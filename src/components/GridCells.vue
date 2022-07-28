<template>
  <div class="cell border-2 border-solid" v-bind:class="[isColored ? 'border-red-600' : 'border-black-600']">
    <h2>{{ this.cellNumber }}</h2>
  </div>
</template>

<script>
import {useShipList} from "../Ships/ShipList.js";

export default {
  name: "GridCells",
  data() {
    return {
      ships: useShipList()
    }
  },
  props: {
    cellNumber: Number,
  },
  computed: {
    isColored() {
      return this.ships.listOfShip.find(element =>  element.position.includes(this.cellNumber))
    }
  }
}
</script>

<style scoped>
.cell {
  height: 50px;
  width: 50px;
}

h2 {
  color: black;
}
</style>