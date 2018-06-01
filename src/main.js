import Vue from 'vue';
import App from './app.vue';
import './assets/css/style.css';
import Nav from './nav/nav.vue';
import Footer from './footer/footer.vue';
Vue.component('my-nav',Nav);
Vue.component('my-footer',Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
