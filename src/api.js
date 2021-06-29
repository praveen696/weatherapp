import Vue from 'vue'
import Weather from '@/api/weather';

const factories = {
	weather: Weather(Vue.axios),
};

Vue.prototype.$api = factories;


