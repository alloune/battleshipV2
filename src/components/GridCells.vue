<template>
    <div class="cell">
      <h2>{{ this.cellNumber }}</h2>
    </div>
</template>

<script>
export default {
  name: "GridCells",
  props:{
    cellNumber: Number,
  }
}
</script>

<style scoped>
.cell{
  border: 2px solid white;
  height: 50px;
  width: 50px;
}
h2{
  color: white;
}
</style>