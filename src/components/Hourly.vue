<template>
	<div class="houlry-wrapper">
		<div class="hourly-data" v-for="item  in data" :key="item.dt">
			<div class="hourly-data-item">
				<div class="text-center">{{ item.dt | moment("ddd, HH:mm") }}</div>
				<currently  :data="item" />
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import Currently from './Currently.vue'


export default {
  components: { Currently },
	name: 'Hourly',
	props: ['data'],
	
	computed: {
		
	},
	methods: {
		
	},
	watch: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hourly-data {
	width: 50%;
	float: left;
}
.hourly-data-item {
	border: 1px solid #d3d3d3;
	background-color: #fcfcfc;
	margin: 5px;
	padding: 10px;
}
@media only screen and (max-width: 768px) {
	.hourly-data {
		width: 100%;
		float: none;
	}
}

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

