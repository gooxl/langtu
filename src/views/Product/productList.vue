<template>
  <!-- 周边游 -->
  <div class="list">
    
    <div  class="placeholder"></div>
      <!-- 头 -->
      <mt-header  class="pro-header" fixed >
        <router-link to="/" slot="left">
          <mt-button icon="back" ></mt-button>
        </router-link>
      </mt-header> 
      <!-- 商品列表 -->
      <list  ></list>
      
  </div>  
  
</template>

<script>
import list from "@/components/productList/list"

export default {
  data(){ 
    return{
  
      


      // pullDownMsg:"",  //下拉触发内容
    }; 
  },
  methods:{
        back(){
      this.$router.back()
    },
      

    // handleToScroll(pos){  //下拉事件
    //   if(pos.y>30){      //y轴超过30触发
    //     this.pullDownMsg="正在更新中"
    //   }
    // },
    // handleToTouchEnd(pos){
    //   if(pos.y>30){
    //     this.pullDownMsg="更新成功";
    //     setTimeout(()=>{
    //       this.pullDownMsg="";
    //     },1000)
    //   }
    // }
  },
  components:{
    list
  },
  mounted(){
  

  }
}
</script>

<style scoped>
.placeholder{
  height:40px;

}
.pro-header{
  color:#000;
  background:#ffda44;

}

</style>