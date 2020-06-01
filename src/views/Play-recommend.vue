<template>
  <!-- 玩法推荐页 -->
  <div class="p-rec">
    <!-- 头 -->
    <div class="placeholder"></div>
    <mt-header title="玩法推荐" class="pro-header" fixed >
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> 
    <play></play>
  </div>
</template>

<script>
import play from "../components/play/play"
export default {
  components:{
    play
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>
.placeholder{
  height:40px;
}
</style>