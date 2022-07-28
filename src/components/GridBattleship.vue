<template>
  <div class="playground">
  <grid-cells v-for="(n) in 100"  :key="n" :cell-number="n"/>
  </div>
</template>

<script>

import GridCells from "./GridCells.vue";

export default {
  name: "GridBattleship",
  components: {GridCells},
  data(){
    return{
      date : null,
    }
  },
  beforeCreate(){

    this.date = new Date
    console.log('A. Before / Le composant va se créer. Time = ', this.date.getMilliseconds())
  },
  mounted(){
    this.date = new Date
    console.log("B. Mounted / le composant est crée. Time = ", this.date.getMilliseconds())
  },
  created() {
    this.date = new Date
    console.log('C. Created / Example d\'intercallage entre 2 hook du cycle de vie. Time = ', this.date.getMilliseconds())
  }
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