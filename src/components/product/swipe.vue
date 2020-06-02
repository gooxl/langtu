<template>
<!-- 景点轮播图 -->
  <div class="app-swipe">
    <!-- 头部两按钮 -->
    <div class="header-btn">
      <router-link to="/productList">
        <van-icon name="arrow-left" color="#fff" size="30" class="btn-left"/>
      </router-link>
      <van-icon name="ellipsis" color="#fff" size="30" class="btn-right"/>
    </div>
    <mt-swipe class="swipe" >
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="'http://127.0.0.1:3000/'+item.md" />
      </mt-swipe-item>
    </mt-swipe> 
    <div class="swiper-footer"></div>
  </div>  
</template>

<script>

export default {
  name:"secnicSpot-swipe",
  props:["imgs"]
}
</script>

<style scoped>
/* 父元素 */
.app-swipe{
  position: relative;
}
/* 头部返回&收藏按钮 */
.header-btn{
  width:100%;
  z-index:1;
  position: absolute; 
  display: flex;
  justify-content: space-between;
  
}
/* 返回按钮 */
.btn-left{
  /* background-color:rgba(119, 116, 101, 0.5); */
  border-radius: 50%;
  top:.6rem; 
  left:.6rem;
}
/* 收藏按钮 */
.btn-right{
  /* background-color:rgba(119, 116, 101, 0.5); */
  border-radius: 50%;
  top:.6rem;
  right:.6rem;
} 
/* 轮播图 */
.swipe{
   height:13rem;
 }
.app-swipe .mint-swipe img{
   width:100%;height: 100%;
   opacity: .9;
 }
.swiper-footer{
  background-color: #fff;
  width:100%;
  height: 1rem;
  border-radius: 5rem 5rem 0 0;
  position:absolute;
  z-index: 1;
  bottom:0;
}

</style>