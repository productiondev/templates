import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import Day1 from './views/Day-1.vue'
import Day2 from './views/Day-2.vue'
import Day3 from './views/Day-3.vue'
import Day4 from './views/Day-4.vue'
import Day5 from './views/Day-5.vue'
import liveEvent from './views/LiveEvent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/day-1',
      name: 'Day1',
      component: Day1
    },
    {
      path: '/day-2',
      name: 'Day2',
      component: Day2
    },
    {
      path: '/day-3',
      name: 'Day3',
      component: Day3
    },
    {
      path: '/day-4',
      name: 'Day4',
      component: Day4
    },
    {
      path: '/day-5',
      name: 'Day5',
      component: Day5
    },
    {
      path: '/live',
      name: 'Event',
      component: liveEvent
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
