<template>
  <div class="shipForm border border-2px p-5 mt-5" v-if="isShipToPlace">
    <label class="block uppercase tracking-wide text-center text-gray-800 text-xl font-bold mb-2">
      Placement des navires
    </label>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Navires
        </label>
        <select v-model="selectedShip">
          <option v-for="ship in  placeableShips" :key="ship"> {{ ship.name }}</option>
        </select>
      </div>
    </div>
    <div class="flex flex-wrap -mx-2 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Position initiale
        </label>
        <div class="relative">
          <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="initPosition"
          >
            <option v-for="n in 100" :key="n">{{ n }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Position Finale
        </label>
        <div class="relative">
          <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="finalPosition"
          >
            <option v-for="n in 100" :key="n">{{ n }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <button
          class=" mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          @click="placeShip"
      >
        Placer mon navire
      </button>
    </div>
  </div>
</template>

<script>

import {useShipList} from "../Ships/ShipList.js";
export default {
  name: "PlaceShip",
  data() {
    return {
      ships: useShipList(),
      selectedShip:null,
      initPosition:null,
      finalPosition:null,
      isShip: false,
      isShipToPlace:'',
    }
  },
  methods: {
    placeShip() {
      const intermediateShipItem = this.ships.listOfShip.filter(element=> element.name === this.selectedShip);
      if(this.checkIdPositionIsValide(intermediateShipItem[0])){
        for(let i =parseInt(this.initPosition); i <= this.finalPosition; i++){
          intermediateShipItem[0].position.push(i);
        }
        return console.log(intermediateShipItem[0].position)
      }
      return alert('La taille n\'est pas valide !!!');
    },
    checkIdPositionIsValide(ship){
      if((this.finalPosition - this.initPosition) + 1 === ship.size){
        return true
      }
      return false
    }
  },
  computed: {
    placeableShips() {
      return this.ships.listOfShip.filter(element => !element.position.length)
    },
    isShipToPlace(){
      if(this.placeableShips.length){
        return true;
      }
      return false;
    }
  },
}
</script>

<style scoped>
.shipForm {
  width: 500px;
}
</style>