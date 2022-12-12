import Vue from 'vue'
import Router from 'vue-router'

import maincontent from '../components/ContentArea.vue'
import sub1content from '../components/Sub1Content.vue'
import sub2content from '../components/Sub2Content.vue'
import sub3content from '../components/Sub3Content.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/vue/', component: maincontent},
    { path: '/vue/sub1', component: sub1content},
    { path: '/vue/sub2', component: sub2content},
    { path: '/vue/sub3', component: sub3content}
  ]
})

