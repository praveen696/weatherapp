<template>
	<div class="text-center">
		<div class="icon">
			<img class="weather-icon" :src="icon" />
		</div>
		<div class="temperature">
			<div class="temp-text">
				<span>{{data.temp | temperature}}</span>
			</div>
			<div class="extra-temp-data">
				<b>Feels like {{data.feels_like | temperature}} | {{weather.description || ''}}</b>
			</div>
		</div>
		<div>
			<div class="current-details">
					<div class="item">
						Pressure: {{data.pressure | pressure}}
					</div>
					<div class="item">
						Humidity: {{data.humidity | humidity}}
					</div>
					<div class="item">
						visibility: {{data.visibility | visibility}}
					</div>
					<div class="item">
						Wind speed: {{data.wind_speed | windspeed}}
					</div>
			</div>
		</div>


	</div>
</template>

<script>

// import Vue from 'vue';

export default {
	name: 'Currently',
	props: ['data'],
	
	computed: {
		weather() {
			return this.data && this.data.weather && this.data.weather['0'] ? this.data.weather['0'] : '';
		},
		icon() {
			return this.weather && this.weather.icon ? `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png` : '';
		}
	},
	methods: {
		
	},
	watch: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.details-list {
	list-style: none;
    padding-left: 0;
}

.current-details .item {
	margin-right: 20px;
	display: inline-block;
}
.temperature {
	margin-bottom: 20px;
}
.temperature .temp-text {
	font-weight: bold;
    font-size: 1rem;
}
.current-data .temp-text {
	font-size: 2.5rem;
}

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

