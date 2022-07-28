<template>
  <div class="flex flex-col m-5 items-center">
    <h2 class="text-lg font-bold">{{ship.name}}</h2>
      <div v-for="item in ship.size" class="temp flex flex-row">
      </div>
    </div>
</template>

<script>
export default {
  name: "ShipTemplate",
  props: {
    sizeOfShip: Array,
    ship: Object
  },
}
</script>

<style scoped>
.temp {
  border: 2px green solid;
  height: 25px;
  width: 25px;
}
</style>