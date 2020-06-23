<template>
  <!-- 我的 -->
  <div class="mine">
    <mt-header title="个人中心" class="mt-header">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <Header></Header>
    <Menu></Menu>
    <Notes :notesData="notesData"></Notes>
    <mt-button size="large" type="danger" plain class="logout"
    @click="logout">退出登录</mt-button>
    <tabbar ></tabbar>

  </div>
</template>

<script>
import axios from 'axios';
import {Toast} from 'mint-ui';
import Header from "@/components/mine/Header";
import tabbar from "@/components/home/Tabbar"; 
import Menu from "@/components/mine/Menu";
import Notes from "@/components/mine/Notes";
export default {
  inject:['reload'], //一：通过inject来注入变量,用于刷新页面
  components:{
    tabbar, 
    Header,
    Menu,
    Notes,
  },
  data(){
    return{
      notesData:[],
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
    // var uname=sessionStorage.getItem('uname');
    axios.get('http://127.0.0.1:3000/checkLogin').then(res=>{
      if(res.data.code==-1){
        Toast("请登录");
        setTimeout(()=>{
          next('/login') //可以通过传一个回调给next来访问组件实例
        },500)
      }else{
        next(vm=>{ //通过'vm'对象访问组件实例 (代替this)
          axios.get('http://127.0.0.1:3000/getTraNote').then(res=>{
            vm.notesData=res.data.data;
          // console.log(vm.notesData)
          })
          axios.get('http://127.0.0.1:3000/getUser')
        })
      }
    })
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
  margin:1rem 0
}
</style>