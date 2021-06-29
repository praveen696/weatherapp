import Vue from 'vue'
import Vuex from 'vuex'

import places from '../../in.json'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        latitude: '',
        longitude: '',
        places: places,
        selectedPlace: '',
        currentPlace: {},
        sample: '',
    },
    getters: {
        places: (state => {
            let items = [];
            Object.keys(state.places).map(key => {
                let data = state.places[key]
                items.push(data);
            })
            return items;

        }),
        selectedPlace: state => state.selectedPlace,
        currentPlace: state => state.currentPlace,
        latitude: (state => {
            return state.selectedPlace.lat || (state.currentPlace.latitude || '')
        }),
        longitude: (state => {
            return state.selectedPlace.lng || (state.currentPlace.longitude || '')
        }),
        result: state => state.sample,
    },
    mutations: {
        setLocation (state, coordinates) {
            state.currentPlace = {
                latitude:  coordinates.latitude,
                longitude:  coordinates.longitude,
            }
        },
        updateValue (state, value) {
            localStorage.setItem('selectedPlace', JSON.stringify(value));
            state.selectedPlace = value
        },
        setResult (state, value) {
            console.log(state, value)
            state.sample = value
        }
    },
    actions: {
        updateValueAction ({ commit }, value) {
            commit('updateValue', value)
        }
    },
    modules: {
        
    }
})