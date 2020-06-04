<template>
  <!-- 我的 -->
  <div class="mine">
    <mt-header title="个人中心" class="mt-header">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <Header></Header>
    <Menu></Menu>
    <tabbar ></tabbar>
    <mt-button size="large" type="danger" plain class="logout"
    @click="logout">退出登录</mt-button>
  </div>
</template>

<script>
import axios from 'axios';
import {Toast} from 'mint-ui';
import Header from "../components/mine/Header";
import tabbar from "../components/home/Tabbar"; 
import Menu from "../components/mine/Menu";
export default {
  inject:['reload'], //一：通过inject来注入变量,用于刷新页面
  components:{
    tabbar, 
    Header,
    Menu
  },
  data(){
    return{

    }
  },
  methods:{
    logout(){
      axios.get('http://127.0.0.1:3000/logout').then(res=>{
        if(res.data.code==1){
          this.$store.commit('user/USER_INFO',{uname : ''})
          Toast(res.data.msg);
          this.reload(); //二：调用App.vue定义的reload()方法刷新页面
          this.$router.push('/login')
        }
      })
    }
    
  },
  // 局部路由前置守卫  //注：beforeRouteEnter不能使用this，如使用axios需要引入
  beforeRouteEnter(to,from,next){
    var uname=sessionStorage.getItem('uname');
    if(!uname){
      Toast("请登录");
      setTimeout(()=>{
        next('/login') //可以通过传一个回调给next来访问组件实例
      },500)
    }else{
      next()
      // next( vm=>{//通过'vm'对象访问组件实例 (代替this)
      //   axios.get('http://127.0.0.1:3000/getUser?uname='+uname).then(res=>{
      //     vm.userInfo=res.data.data;
      //     // console.log(vm.userInfo)
      //   })
      // })
    }
  },


         


}
</script>

<style scoped>
.mt-header{
  background-image:linear-gradient(to right,#ff0,#ffda44) ;
  font-weight:bold;
  color:#000
}
.logout{
  margin-top:1rem
}
</style>