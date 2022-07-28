<template>
  <div class="playground">
  <grid-cells v-for="(n, index) in 100"  :key="n" :cell-number="n"/>

  </div>
</template>

<script>

import GridCells from "./GridCells.vue";
export default {
  name: "GridBattleship",
  components: { GridCells }
}
</script>

<style scoped>
.playground{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
}
</style>