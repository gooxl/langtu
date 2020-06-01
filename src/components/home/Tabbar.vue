<template>
  <div class="tabbar">
    <!-- tabbar -->
    <van-tabbar v-model="active" active-color="#ffda44" placeholder>
      <van-tabbar-item to="/">
        <span>首页</span>
        <img slot="icon" slot-scope="props"
        :src="props.active ? home_icon.active : home_icon.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/travels">
        <span>旅拍</span>
        <img slot="icon" slot-scope="props"
        :src="props.active ? travels_icon.active : travels_icon.normal">
      </van-tabbar-item>
      <van-tabbar-item  to="/mine">
        <span>我的</span>
        <img slot="icon" slot-scope="props"
        :src="props.active ? mine_icon.active : mine_icon.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
   data() {
    return {
      active: 0,
      tabbar:["","travels","mine"],
      home_icon: {
        normal: require('../../../public/img/icon/首页.png'),
        active: require('../../../public/img/icon/首页选中.png')
      },
      travels_icon: {
        normal: require('../../../public/img/icon/游记.png'),
        active: require('../../../public/img/icon/游记选中.png')
      },
      mine_icon: {
        normal: require('../../../public/img/icon/我的.png'),
        active: require('../../../public/img/icon/我的选中.png')
      }
    };
  },
  mounted(){
      this.tabbarActive();
  },
  watch: {
    '$route' (to, from) {// 对路由变化作出响应
      this.tabbarActive();
    }
  },
  methods: {
    tabbarActive(){
      const href = window.location.href.split("#/")[1];
      for(let i=0;i<4;i++){
        if(href==this.tabbar[i]){
          this.active=i;
        }
      }
    },
  },

}
</script>

<style>

</style>