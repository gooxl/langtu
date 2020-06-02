<template>
  <div class="container">
    <!-- 头 -->
    <Header></Header>
    <!-- 轮播 -->
    <swipe :swipeImg="swipeImg"></swipe>
    <!-- 宫格 -->
    <grid :gridInfo="gridInfo"></grid>
    <!-- 热门去处 -->
    <popular :popPlace="popPlace"></popular>
    <!-- 玩法推荐 -->
    <!-- <recommend></recommend> -->
    <!-- tab -->
    <tab :tabList="tabList"></tab>
    <!-- hotsale -->
    <hotsale :hotList="hotList"></hotsale>
    <!-- tabbar -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import Header from "../components/home/Header"  //引入头部组件
import swipe from "../components/home/swipe"  //引入轮播图
import grid from "../components/home/grid"  //图标组件
import recommend from "../components/home/Recommend"  //引入推荐组件
import popular from "../components/home/Popular"  //引入热门组件
import tab from "../components/home/Tab"  
import hotsale from "../components/home/Hotsale" 
import tabbar from "../components/home/Tabbar" 
export default {
   components:{  
     Header,   //注册搜索组件
     swipe,     //注册轮播图
     grid,     //注册轮播图
     recommend,  //注册推荐组件   
     popular,      
     tab,       
     hotsale,    
     tabbar,      
   },
   data() {
    return {
      swipeImg:[],   //轮播图
      gridInfo:[],  //宫格数据
      popPlace:[],  //热门去处数据
      tabList:[],   
      hotList:[],
      prevCityId:-1  //上一次城市的id，用户判断城市用户是否切换城市
    }
  },
  methods:{

  },
  created(){
    // 获取宫格数据
    this.axios.get('http://127.0.0.1:3000/getGridInfo').then(res=>{
      this.gridInfo=res.data.data;
    })
  },
  mounted(){  
    var cityId=this.$store.state.city.id;
    if(this.prevCityId===cityId){return;} //如果上次城市id等于城市id，说明没有切换城市

    this.axios.get('/qunarApi/cityDetail/cityid/'+cityId).then(res=>{
      // console.log(res.data.cityDetail)
      this.prevCityId=cityId;   
      this.swipeImg=res.data.cityDetail[0].cityDetail.banners
      this.popPlace=res.data.cityDetail[0].cityDetail.hostList
      this.tabList=res.data.cityDetail[0].cityDetail.likeList
      this.hotList=res.data.cityDetail[0].cityDetail.weekendTrip
    })
    this.axios.get('/qunarApi/hostList/cityid/'+cityId).then(res=>{
      // console.log(res.data)
    })
  }

}
</script>

<style scoped>

</style>