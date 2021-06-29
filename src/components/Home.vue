<template>
	<div>
		<h1>Welcome to know weather</h1>
		<multiselect 
		placeholder="Pick action" 
		v-model="selectedPlace" 
		:options="places" 
		:searchable="true" 
		:multiple="false"
		:hideSelected="true"
		label="city"
		track-by="city"
		@input="updateValueAction">
		</multiselect>
		<button  class="current-location-button" @click="selectCurrentLocation">Current Location</button>
		<div class="clearfix"></div>
		<div class="text-center">
			<div v-if="selectedPlace && selectedPlace.city">
				<h2 v-html="selectedPlace.city"></h2>
			</div>
			<div v-else-if="selectedLatLong.lat && selectedLatLong.long">
				<h2>Current Location</h2>
			</div>
		</div>
		<!-- Tab links -->
		<div class="tab">
			<button class="tab-links" :class="{active: 'currently' == active}" @click="active='currently'">Current</button>
			<button class="tab-links" :class="{active: 'hourly' == active}" @click="active='hourly'">Hourly</button>
			<button class="tab-links" :class="{active: 'daily' == active}" @click="active='daily'">Daily</button>
		</div>
		<div v-if="result">
			<div class="tab-items" v-show="'currently' == active">
				<currently class="current-data" :data="result.current || ''" />
			</div>
			<div class="tab-items" v-show="'hourly' == active">
				<hourly :data="result.hourly || ''" />
			</div>
			<div class="tab-items" v-show="'daily' == active">
				<daily :data="result.daily || ''" />
			</div>
		</div>
	</div>
</template>

<script>

import {mapGetters, mapActions}  from 'vuex';
import Multiselect from 'vue-multiselect'
import Currently from './Currently.vue';
import Hourly from './Hourly.vue';
import Daily from './Daily.vue';

export default {
	name: 'Home',
	props: {

	},
	data() {
		return {
			active: 'currently',
		}
	},
	components: {
		Multiselect,
		Currently,
		Hourly,
		Daily
	},
	computed: {
		...mapGetters([
			'latitude',
			'longitude',
			'places',
			'selectedPlace',
			'result',
			'currentPlace'
		]),
		selectedLatLong() {
			return {
				lat: this.latitude || '',
				long: this.longitude || ''
			}
		}
	},
	mounted() {
		console.log(this.selectedLatLong);
		this.setWeather();
	},
	methods: {
		...mapActions(['updateValueAction']),
		async setWeather() {
			if (this.selectedLatLong && this.selectedLatLong.lat && this.selectedLatLong.long) {
				let weather = await this.$api.weather.getWeather(this.selectedLatLong.lat, this.selectedLatLong.long);
				this.$store.commit('setResult', weather);
			}
		},
		selectCurrentLocation() {
			this.$store.commit('updateValue', this.currentPlace);
		}
	},
	watch: {
		selectedLatLong(val) {
			console.log(val);
			if (val && val.lat && val.long) {
				this.setWeather();
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.tab {
	width: 100%;
	margin-top: 30px;
}

.tab-links {
	padding: 10px;
	width: 100px;
    height: 40px;
}
.tab-links.active {
	background: #a3a3a3;
    color: #fff;
}
.current-location-button {
	float: right;
	margin: 5px 0;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

