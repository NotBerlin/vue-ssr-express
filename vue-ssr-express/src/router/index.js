import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/Detail'
import Index from '../components/Index'

Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/detail',
        component: Detail
      },
      {
        path: '/',
        component: Index
      }
    ]
  })
}