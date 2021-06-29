<template>
	<div class="daily-data">
		<div class="text-center"> 
			<span>{{ item.dt | moment("ddd, MMM DD") }}</span>
			<div class="daily-description">
				<b>{{item.weather[0].description}}</b>
			</div>
			<div class="icon">
				<img class="weather-icon" :src="icon" />
			</div>
			<div>
				<div class="current-details">
						<div class="item">
							Pressure: {{item.pressure | pressure}}
						</div>
						<div class="item">
							Humidity: {{item.humidity | humidity}}
						</div>
						<div class="item">
							Wind speed: {{item.wind_speed | windspeed}}
						</div>
				</div>
			</div>
		</div>
		<div class="min-max">
			<span class="item"><b>Min: </b>{{item.temp.min | temperature}}</span> 
			&nbsp;
			<span class="item"><b>Max: </b>{{item.temp.max | temperature}}</span>
		</div>
		<div class="daily-temp daily-item-wrapper">
			<table class="table">
				<tbody>
					<tr>
						<td></td>
						<td>Morning</td>
						<td>Afternoon</td>
						<td>Evening</td>
						<td>Night</td>
					</tr>
					<tr>
						<td>Temperature</td>
						<td>{{item.temp.morn | temperature}}</td>
						<td>{{item.temp.day | temperature}}</td>
						<td>{{item.temp.eve | temperature}}</td>
						<td>{{item.temp.night | temperature}}</td>
					</tr>
					<tr>
						<td>Feels like</td>
						<td>{{item.feels_like.morn | temperature}}</td>
						<td>{{item.feels_like.day | temperature}}</td>
						<td>{{item.feels_like.eve | temperature}}</td>
						<td>{{item.feels_like.night | temperature}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="clearfix"></div>
		
	</div>
</template>

<script>

// import Vue from 'vue';

export default {
	name: 'DailyItem',
	props: ['item'],
	
	computed: {
		weather() {
			return this.item && this.item.weather && this.item.weather['0'] ? this.item.weather['0'] : '';
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
<style style="css">
.table {
	margin: auto;
}
.table td {
	padding: 5px;
}
</style>

