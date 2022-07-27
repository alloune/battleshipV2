<template>
  <div class="temp">

  </div>
</template>

<script>
export default {
  name: "ShipTemplate",
  props:{
    sizeOfShip: Array,
}
}
</script>

<style scoped>
.temp{
  border:2px green solid;
  height: 25px;
  width: 25px;
}
</style>