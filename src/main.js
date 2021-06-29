import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation';
import VueMoment from 'vue-moment'
import "@/api.js";
 
Vue.use(VueMoment)

Vue.use(VueGeolocation);
Vue.config.productionTip = false


//Filters
//Temperature
Vue.filter('temperature', function (value) {
	if (!value) return ''
	return value + '°C'
})
//wind
Vue.filter('windspeed', function (value) {
	if (!value) return ''
	return value + 'm/s'
})
//pressure
Vue.filter('pressure', function (value) {
	if (!value) return ''
	return value + 'hPa'
})
//humidity
Vue.filter('humidity', function (value) {
	if (!value) return ''
	return value + '%'
})
//visibility
Vue.filter('visibility', function (value) {
	if (!value) return ''
	return (value/1000).toFixed(1) + 'km'
})


  


new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
