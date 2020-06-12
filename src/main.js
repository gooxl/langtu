import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false  
/*Mint-UI*/
import Mint from 'mint-ui' //1.引mint-ui(完整引入)
import "mint-ui/lib/style.css"  //2.单引mint-ui样式文件
Vue.use(Mint);//3.将mint-ui注册vue

/* axios */ 
import axios from 'axios' //1.引入axios
Vue.prototype.axios=axios //2.将axios装进vue原型对象中
axios.defaults.withCredentials=true;//3.设置跨域访问时保存session信息
// axios.defaults.baseURL="http://127.0.0.1:3000" //设置ajax请求基础路径

/* qs模块*/  //解决post问题
import qs from 'qs';
Vue.prototype.qs=qs; //配置到Vue的原型中
/*Vant*/ 
import {Tabbar,TabbarItem,Icon,Grid,GridItem,Tab,Tabs,Tag,Search
,NavBar,Calendar,Cell,CellGroup,Stepper,SubmitBar,GoodsAction, GoodsActionIcon,
 GoodsActionButton,List,Popup,Field,Button,Divider,Rate,PullRefresh,ActionSheet,
} from 'vant';
import "vant/lib/index.css";
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Grid).use(GridItem).use(Tab)
.use(Tabs).use(Tag).use(Search).use(NavBar).use(Calendar).use(Cell).use(CellGroup)
.use(Stepper).use(SubmitBar).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
.use(List).use(Popup).use(Field).use(Button).use(Divider).use(Rate).use(PullRefresh)
.use(ActionSheet);
/* 瀑布*/
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
/*iconfont*/
import "./assets/iconfont/iconfont.css"
/* better-scroll 组件*/ 
import Scroller from './components/betterScroll/Scroller'
Vue.component('Scroller',Scroller)
/*loading组件 */
import Loading2 from '@/components/Loading/loading2' 
Vue.component('Loading2',Loading2)
// 日期格式过滤器
Vue.filter("ct",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1; //月份0~11
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  m<10&&(m="0"+m);d<10&&(d="0"+d);
  h<10&&(h="0"+h);mi<10&&(mi="0"+mi);s<10&&(s="0"+s);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
