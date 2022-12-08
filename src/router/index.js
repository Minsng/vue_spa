import Vue from 'vue'
import Router from 'vue-router'
import index from '../App.vue'
import sub1 from '../components/Sub1Content.vue'
import sub2 from '../components/Sub2Content.vue'
import sub3 from '../components/Sub3Content.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/vue/', component: index},
    { path: '/vue/sub1', component: sub1},
    { path: '/vue/sub2', component: sub2},
    { path: '/vue/sub3', component: sub3}
  ]
})

