<template>
  <!-- 周边游 -->
  <div class="list">

      <div class="placeholder"></div>
        <!-- 头 -->
        <mt-header :title="this.title" class="pro-header" fixed >
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header> 
        <!-- 商品列表 -->
      <van-list v-model="loading" :finished="finished"
      finished-text="没有更多了" @load="onLoad">
        <list :list="productList" ></list>
      </van-list>
      
  </div>  
  
</template>

<script>
 import list from "../components/productList/list"

export default {
  data(){ 
    return{
      productList:[], //产品列表
      title:'',  //头名称
      pno:0,   //页码
      pageSize:6,  //页大小
      loading: false,  //加载状态
      finished: false, //是否加载完成 
      pullDownMsg:"",  //下拉触发内容
    }; 
  },
  methods:{
    loadMore(){ //加载产品数据
      this.pno++;
      this.axios.get('/getProductList?pno='+this.pno
                      +"&pageSize="+this.pageSize)
      .then(res=>{
        this.title=res.data.data[0].tname;
        var rows=this.productList.concat(res.data.data);
        this.productList=rows;
      })
    },
    onLoad() {
      // 异步更新数据
      this.loadMore();
        // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.productList.length >= 10) {
        this.finished = true;
      }
    },
    handleToScroll(pos){  //下拉事件
      if(pos.y>30){      //y轴超过30触发
        this.pullDownMsg="正在更新中"
      }
    },
    handleToTouchEnd(pos){
      if(pos.y>30){
        this.pullDownMsg="更新成功";
        setTimeout(()=>{
          this.pullDownMsg="";
        },1000)
      }
    }
  },
  components:{
    list
  },
  created(){
    this.loadMore();
  }
}
</script>

<style scoped>
.placeholder{
  height:40px;

}
.pro-header{
  color:#000;
  background:#ffda44;

}

</style>