<template>
  <div class="admin">
    管理页面
  </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'mint-ui'
export default {
  name:'admin',

  beforeRouteEnter(to,from,next){
    var uname=sessionStorage.getItem('uname');
    if(uname){
      axios.get('http://127.0.0.1:3000/getUser?uname='+uname).then(res=>{
        if(res.data.data[0].isAdmin==1){
          next();
        }else{
        setTimeout(()=>{
          Toast('抱歉！您不是管理员')
          next('/mine')
        },300)
        }
      })
    }else{ 
      setTimeout(()=>{
        Toast('请登录')
        next('/login')
      },300)
    }    


  }
}
</script>

<style>

</style>