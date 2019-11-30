import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// import graceHeader from "./components/graceHeader.vue";
// Vue.component('graceHeader', graceHeader);

const app = new Vue({
    ...App
})
app.$mount()
