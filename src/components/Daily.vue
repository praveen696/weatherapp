<template>
	<div class="daily-wrapper">
		<div class="daily-data-wrapper text-center" v-for="item  in data" :key="item.dt">
			<daily-item :item="item" />
		</div>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import DailyItem from './DailyItem.vue'

export default {
  components: { DailyItem },
	name: 'Daily',
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
<style style="css">
.daily-data {
	border: 1px solid #d3d3d3;
    padding: 10px;
    margin: 10px;
    background-color: #fcfcfc;
}
.clearfix {
	clear: both;
}
.daily-list {
	list-style: none;
	text-align: left;
	padding-left: 0;
}
.daily-item-wrapper {
	margin-top: 10px;
}
.daily-item {
	margin: 10px 0;
}
@media only screen and (max-width: 768px) {
	.daily-data-wrapper {
		width: 100%;
		float: none;
	}
}
</style>

