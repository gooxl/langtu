<template>
  <!-- 我的 -->
  <div class="mine">
    <Header :isLogin="isLogin"></Header>
    <Menu></Menu>
    <tabbar ></tabbar>
  </div>
</template>

<script>
import Header from "../components/mine/Header"
import tabbar from "../components/home/Tabbar"  
import Menu from "../components/mine/Menu"  
export default {
  components:{
    tabbar, 
    Header,
    Menu
  },
  data(){
    return{
      isLogin:false,
    }
  },
  methods:{
    checkLogin(){
      this.axios.get("/checkLogin").then(res=>{
        console.log(res.data)
        if(res.data.code==1){
          this.isLogin=true;
        }else{
          this.isLogin=false;
        }
      })
    }
  },
  created(){
    this.checkLogin();
  }
}
</script>

<style >

</style>