<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"/>
    </keep-alive>  
  </div>
</template>
<script>
  export default{
    name:'App',
    provide(){ //父组件中通过provide来提供变量，在子组件中通过inject来注入变量
      return{ 
        reload:this.reload
      }
    },
    data(){
      return{ 
        isRouterAlive:true //控制视图是否显示的变量
      }  
    },
    methods:{
      reload(){
        this.isRouterAlive=false;  //先关闭
        this.$nextTick(function(){
          this.isRouterAlive=true;  //再打开
        })
      }
    }
  }
</script>
<style>
/* 引入通用基础样式文件normalize */
@import url("./assets/css/normalize.css"); 
@import url("./assets/css/media.css"); 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  touch-action: pan-y; /*解决移动端点击事件延迟*/
}

  


</style>
