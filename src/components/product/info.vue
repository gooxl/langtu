<template>
  <div class="info">
      <van-tabs  v-model="active" sticky color="#ffd90a" >
        <van-tab  title="景区须知" >
          景区须知
        </van-tab>
        <van-tab  title="景区简介">
          景区简介
        </van-tab>
        <van-tab  title="交通指南">
          交通指南
        </van-tab>
        <van-tab  title="游客点评">
          内容
        </van-tab>
      </van-tabs>
 
  </div>
</template>

<script>
export default {
data() {
    return {
      active:0,
    };
  },
}
</script>

<style scoped>
.info{
  border-top:.5rem solid #eee
}
</style>