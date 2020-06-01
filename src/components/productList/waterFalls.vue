<template>
  <!-- 瀑布start -->
  <div class="water-fall">
    <waterfall :col="col" :data="data" @loadmore="loadmore" >
      <template> 
        <div class="fall-item" v-for="(item,index) in data" :key="index">
          <div class="fall-img">
            <img v-if="item.md" :lazy-src="`http://127.0.0.1:3000/${item.md}`" alt="加载错误">
            <van-tag color="#ffda44" text-color="#ad0000" >{{item.days}}天</van-tag>
          </div>
          <div class="item-body">
            <!-- <div class="item-location">情侣路·珠海</div> -->
            <div class="item-title">{{item.title}}</div>
            <div class="item-footer">
              <div class="item-footer-left">
                 <span>¥</span>
                 <span>{{item.price}}</span>
                 <span>起</span>
              </div>
              <div class="item-footer-right">已售{{item.sold}}</div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
    <!-- loading -->
    <loading :show="loading"/>
    </div><!-- 瀑布end -->
  </div>
</template>

<script>
import loading from "../travel/loading";
export default {
  name:"product-waterFalls",
  props: ["originData"],
  components: {
    loading
  },
  data() {
    return {
      data: [],
      col: 2,  //列数
      loading: false,  //加载状态
      // originData: [
      //   {
      //     img:
      //       "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
      //     avatar:
      //       "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
      //     title: "【梦幻青海湖】西宁-青海湖-绘唐卡-卓尔山5日",
      //     user: "www",
      //     like: "95322"
      //   },
      //   {
      //     img:
      //       "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
      //     avatar:
      //       "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
      //     title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
      //     user: "迷人的小妖精",
      //     like: "952"
      //   },
      //   {
      //     img:
      //       "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
      //     avatar:
      //       "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
      //     title: "最近浴室新宠，日系神仙好物了解一下～",
      //     user: "迷人的小妖精迷人的小妖精",
      //     like: "953"
      //   },
      //   {
      //     img:
      //       "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
      //     avatar:
      //       "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
      //     title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
      //     user: "迷人的小妖精迷人的小妖精",
      //     like: "953"
      //   },
      //   {
      //     img:
      //       "https://image.watsons.com.cn//upload/d862d932.jpg?w=1080&h=1440&x-oss-process=image/resize,w_1080",
      //     avatar:
      //       "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
      //     title: "最近浴室新宠，日系神仙好物了解一下～",
      //     user: "迷人的小妖精迷人的小妖精",
      //     like: "953"
      //   },
      // ]
    };
  },
  computed: {
    // itemWidth() { //#rem布局 计算宽度
    //   return 133 * 0.5 * (document.documentElement.clientWidth / 375); 
    // },
    // gutterWidth() {
    //   return 10 * 0.5 * (document.documentElement.clientWidth / 375);
    // }
  },
  methods: {
    switchCol(col) {
      this.col = col;
    },
    loadmore() {
      console.log(this.list)
      this.loading = true;
      setTimeout(() => {
        this.data = this.data.concat(this.originData,this.originData);
        this.loading = false;
      }, 100);
    },

  },
  created() {
    // this.getProduct();
    this.data = this.originData;

  }
};
</script>

<style scoped>
/*样式出现问题去掉scoped */
/* 瀑布父元素 */
.water-fall {
  box-sizing: border-box;
  width:100%;
  padding:.5rem .2rem 0rem .1rem
}
/* item*/
.fall-item {
  margin:0rem 0rem .2rem .1rem;
  background: #fff;
  border: 2px solid #F0F0F0;
  border-radius: 8px;
  overflow: hidden;
  
}
.fall-img{
  position: relative;
}
/*图片*/
.fall-img img{
  width: 100%;
  
  /* height: auto; */
}
/* 天数标签 */
.fall-img :nth-child(2){
  position:absolute;
  top:0;
  left:0;
}
/* 文本内容 */
.item-body {
  padding:.2rem .4rem .4rem .4rem;
}
/* 位置 */
.item-location{
  padding-bottom:.4rem;
  text-align: left;
  color:#ceaa1d;
  text-overflow: ellipsis;
  font-size: .6rem;
  font-weight: 700;

}
.item-title{
  font-size: .6rem;
  color: #333333;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-Medium;
  overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 2; /*显示行数*/ 
  -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */ 
}
/* 底部 */
.item-footer {
  margin-top: .8rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.item-footer-left :first-child{
  color:red;
  font-size: .3rem;
}
.item-footer-left :nth-child(2){
  color: red;
}
.item-footer-left :nth-child(3){
  color: #666;
  font-size: .8rem;
}
.item-footer-right{
  font-size:.5rem;
  padding-top:.2rem;

}

</style>