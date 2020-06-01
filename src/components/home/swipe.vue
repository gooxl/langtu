<template>
<!-- 轮播图 -->
  <div class="app-swipe">
    <mt-swipe  class="swipe">
      <mt-swipe-item v-for="(item,index) in swipeImg.slice(2) " :key="index">
        <img :src="item" />
      </mt-swipe-item>
    </mt-swipe> 
    <div class="swiper-bottom"></div>
  </div>  
</template>

<script>

export default {
  name:"home-swipe",
  props:["swipeImg"],
  data(){
    return {
    }
  },
  methods:{
  
  },

}
</script>

<style scoped>
.app-swipe{
  position: relative;
}
.swipe{
   height:12rem;
 }
 .app-swipe .mint-swipe img{
   width:100%;
   height: 100%;

 }
.swiper-bottom{
  background-color: #fff;
  width:100%;
  height: .5rem;
  border-radius: 5rem 5rem 0 0;
  position:absolute;
  z-index: 1;
  bottom:0;
}

</style>