/* 
  所有路由配置的数组
*/
import Msite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'

export default [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/profile',
    component: Profile,
  }
]