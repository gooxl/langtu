<template>
<!-- 轮播图 -->
  <div class="app-swipe">
    <mt-swipe  class="swipe" :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in notesImg" :key="index">
        <img v-if="typeof item=='string'"  :src="item" />
        <img v-else-if="item.big" :src="item.big" />
        <img v-else :src="item.lg" />
      </mt-swipe-item>
    </mt-swipe> 
    <!-- 返回按钮 -->
    <van-icon name="arrow-left" color="#fff" size="30" class="back-icon"
    @click="$router.back(-1)"/>

  </div>  
</template>

<script>

export default {
  name:"traDetail-swipe",
  props:["notesImg"],
  data(){
    return {
    }
  },
  methods:{

  },
  mounted(){
    console.log(this.notesImg)
  }
}
</script>

<style scoped>
.app-swipe{
  position: relative;
}
.swipe{
   height:13rem;
 }
 .app-swipe .mint-swipe img{
   width:100%;
   height:100%;

 }
/* 返回按钮 */
.back-icon{
  position: absolute;
  background-color:rgba(119, 116, 101, 0.5);
  text-align: center;
  border-radius: 50%;
  z-index:1;
  top:.3rem;
  left:.3rem;
}
</style>