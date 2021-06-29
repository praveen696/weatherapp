<template>
	<div id="app">
		<div class="container">
			<Home/>
		</div>
	</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
	name: 'App',
	components: {
		Home
	},
	created() {
		let selectedPlace = localStorage.getItem('selectedPlace');
		selectedPlace = selectedPlace ? JSON.parse(selectedPlace) : '';
		if (selectedPlace) {
			this.$store.commit('updateValue', selectedPlace);
		}
		
		this.$getLocation()
		.then(coordinates => {
			this.$store.commit('setLocation', {
				latitude: coordinates.lat,
				longitude: coordinates.lng,
			});
		});
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
	background-color: #d8d3d3;
}
.container {
	max-width: 900px;
	margin: auto;
	background-color: #fff;
	padding: 20px;
	text-align: left;
}
.text-center {
	text-align: center;
}
</style>
