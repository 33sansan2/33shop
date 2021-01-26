import Vue from "vue"
import App from '@/App.vue'
//@ 是一个别名，代表的就是我们的src的路径

Vue.config.productionTip = false

new Vue({
    el:"#app",
    render: h => h(App)
})