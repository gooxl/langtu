<template>
<!-- 轮播图 -->
  <div class="app-swipe">
    <mt-swipe  class="swipe">
      <mt-swipe-item v-for="(item,index) in swipeImg" :key="index">
        <img :src="item" />
      </mt-swipe-item>
    </mt-swipe> 
    
  </div>  
</template>

<script>

export default {
  name:"home-swipe",
  props:["swipeImg"],
}
</script>

<style scoped>

.swipe{
   height:12rem;
 }
 .app-swipe .mint-swipe img{
   width:100%;
   height: 100%;

 }

</style>