import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import NotFound from '../views/NotFound'
import travels from '../views/Travels'  
import mine from '@/views/Mine'   //也可以使用@表示src目录
import place from '@/views/Place'   
import recommend from '@/views/Play-recommend'   
import product from '@/views/Product/Product'   
import placeOrder from '../views/PlaceOrder'   
import productList from '../views/Product/productList'  
import traDetail from '../views/Product/traDetail'  
import CommentList from '../views/CommentList'  
import Login from '../views/Login'  
import Regist from '../views/Regist'  
import Admin from '../views/Admin'  
import City from '@/components/city/City'  



Vue.use(VueRouter)
  const routes = [
  {path: "/",component: Index},
  {path: "/index",component: Index},
  {path: "/travels",component: travels},
  {path: "/mine",component: mine},
  {path: "/productList",component: productList},
  {path: "/place",component: place},
  {path: "/recommend",component: recommend},
  {path: "/placeOrder",component: placeOrder},
  {path: "/product/:pid",component: product,props:true},
  {path: "/tradetail",component: traDetail,},
  {path: "/commentList",component: CommentList},
  {path: "/login",component: Login},
  {path: "/regist",component: Regist},
  {path: "/city",component: City},
  {path: "/admin",component: Admin},
  {path: "/*",component:NotFound },

]

const router = new VueRouter({
  routes
})

export default router
