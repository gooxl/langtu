<template>

  <div >
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"/>
    </div>
    <div class="placehold"></div>
  </div>
  
</template>

<script>
export default {
   data() {
    return {
      value: '',
    };
  },
}
</script>

<style scoped>
.search{
  position:fixed;
  top:0;
  width:100%;
  z-index:10;
}
.placehold{
  height:3rem;
}
</style>