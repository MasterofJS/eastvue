
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Register Vue Components
Vue.component('adventures', require('./components/Adventures.vue'));
Vue.component('events', require('./components/Events.vue'));
Vue.component('category-slider', require('./components/CategorySlider.vue'));
Vue.component('site-footer', require('./layouts/Footer.vue'));

const app = new Vue({
    el: '#app'
});
