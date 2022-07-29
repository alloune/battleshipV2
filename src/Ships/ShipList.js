import { defineStore  } from "pinia";

export const useShipList = defineStore("ShipsList",{
    state: ()=>{
    const data = JSON.parse(localStorage.getItem('listOfShip')  || null)
        return {
            listOfShip: data || [
                {
                    name: 'Croiser',
                    size: 5,
                    position: [],
                    status: null,
                },
                {
                    name: 'Destroyer',
                    size: 4,
                    position: [],
                    status: null,
                },
                {
                    name: 'Fregate',
                    size: 3,
                    position: [],
                    status: null,
                },
                {
                    name: 'Torpedo',
                    size: 3,
                    position: [],
                    status: null,
                },
                {
                    name: 'Speeder',
                    size: 2,
                    position: [],
                    status: null,
                },
            ],
        }
    }
})