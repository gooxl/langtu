import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import NotFound from '../views/NotFound'
import travels from '../views/Travels'  
import mine from '@/views/Mine/Mine'   //也可以使用@表示src目录
import place from '@/views/Place'   
import recommend from '@/views/Play-recommend'   
import product from '@/views/Product/Product'   
import placeOrder from '../views/PlaceOrder'   
import productList from '../views/Product/productList'  
import comDetail from '../views/comDetail'  
import traDetail from '../views/traDetail'  
import addrDetail from '../views/addrDetail'  
import CommentList from '../views/CommentList'  
import Login from '../views/Login'  
import Regist from '../views/Regist'  
import Admin from '../views/Admin'  
import MyOrder from '@/views/Mine/MyOrder'  
import orderDetail from '@/views/Mine/orderDetail'  
import notesDetail from '@/views/Mine/notesDetail'  
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
  {path: "/product/:pid",component: product,props:true}, //方式二，使用props属性接收pid
  // {path: "/product",component: product},
  {path: "/tradetail",component: traDetail},
  {path: "/comdetail",component: comDetail},
  {path: "/addrDetail",component: addrDetail},
  {path: "/commentList",component: CommentList},
  {path: "/login",component: Login},
  {path: "/regist",component: Regist},
  {path: "/city",component: City},
  {path: "/admin",component: Admin},
  {path: "/myOrder",component:MyOrder},
  {path: "/orderDetail",component:orderDetail},
  {path: "/notesDetail",component:notesDetail},
  {path: "/*",component:NotFound },
  
  

]

const router = new VueRouter({
  routes
})

export default router
