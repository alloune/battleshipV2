<template>
  <div class="cell" :class="this.loadingPage">
    <h2>{{ this.cellNumber }}</h2>
  </div>
</template>

<script>
export default {
  name: "GridCells",
  props: {
    cellNumber: Number,
  },
  data() {
    return {
      loadingPage: '',
    }
  },
}
</script>

<style scoped>
.cell {
  border: 2px solid black;
  height: 50px;
  width: 50px;
}

h2 {
  color: black;
  text-align: center;
}
</style>