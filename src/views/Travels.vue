<template>
  <!-- 旅拍页 -->
  <div class="traval">
    <!-- 搜索框 -->
    <!-- <search></search> -->
    <!-- tabs -->
    <van-tabs v-model="active" color="#ffd90a" animated 
    swipeable sticky :offset-top="0">
      <van-tab title="周边" title-style="font-weight:bolder;font-size:1rem;">
        <!-- 瀑布流主体 -->
        <waterFalls></waterFalls>
      </van-tab>
      <van-tab title="推荐" title-style="font-weight:bolder;font-size:1rem">
        <waterFalls></waterFalls>
      </van-tab>
      <van-tab title="国内" title-style="font-weight:bolder;font-size:1rem">
        
      </van-tab>
      <van-tab title="国外" title-style="font-weight:bolder;font-size:1rem">
        
      </van-tab>
      <van-tab title="海岛游" title-style="font-weight:bolder;font-size:1rem">
        
      </van-tab>
      <van-tab title="情侣出行" title-style="font-weight:bolder;font-size:1rem">
        
      </van-tab>
    </van-tabs>
    <!-- 底部tabbar -->  
    <tabbar></tabbar>
  </div>
</template>

<script>
// 引入组件
import waterFalls from "@/components/travel/waterFalls"  
import tabbar from "../components/home/Tabbar"  
import search from "../components/travel/Search" 

 
export default {
  // 注册组件
  components:{
    waterFalls,  
    tabbar,  
    search,
  },
  data() {
    return {
      active:0,  //tabs状态
    }
  }
}
</script>

<style>

</style>