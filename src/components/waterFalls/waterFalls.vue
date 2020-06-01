<template>
<!-- 原版 -->
  <!-- 瀑布start -->
  <div class="water-fall">
    <waterfall :col="col" :data="data" @loadmore="loadmore" >
      <template> 
        <div class="fall-item" v-for="(item,index) in data" :key="index">
          <div class="fall-img">
            <img  :src="item.img" alt="加载错误">
            <div class="item-location">
              <van-icon name="location-o" />
              <!-- <span>{{item.city}}·{{item.position}}</span> -->
              <span>情侣路</span>
            </div>
          </div>
          <div class="item-body">
            <div class="item-title">{{item.title}}</div>
            <div class="item-footer">
              <div class="item-footer-left">
                <div v-if="item.avatar" class="avatar"
                :style="{backgroundImage : `url(${item.avatar})`}"
                ></div>
                <div class="name">{{item.user}}</div>
              </div>
              <div class="like">
                <van-icon name="like-o"/>
                <span>{{item.like}}</span>
              </div>
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
import loading from "./loading";
export default {
  name:"travels-waterFalls",
  props:["list"],
  components: {
    loading
  },
  data() {
    return {
      data: [],
      col: 2,  //列数
      loading: false,  //加载状态
      originData: [
        {
          img:
            "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "【梦幻青海湖】西宁-青海湖-绘唐卡-卓尔山5日",
          user: "www",
          like: "95322"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精",
          like: "952"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/d862d932.jpg?w=1080&h=1440&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
      ]
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
      console.log(this.data)
      this.loading = true;
      setTimeout(() => {
        this.data = this.data.concat(this.originData);
        this.loading = false;
      }, 100);
    }
  },
  mounted() {
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
/* 瀑布子元素 */
.fall-item {
  margin:0rem 0rem .2rem .1rem;
  background: #ffffff;
  border: 2px solid #F0F0F0;
  border-radius: 12px;
  overflow: hidden;
  
}
.fall-img{
  position: relative;
}
/*图片*/
.fall-item img{
  width: 100%;
  height: auto;
}
/* 位置 */
.item-location{
  position:absolute;
  z-index:1;
  background-color:rgba(0,0,0,.3);
  bottom:.5rem;
  left:.5rem;
  border-radius:2rem;
  color:#fff;
  text-overflow: ellipsis;
  font-size: .6rem;
  font-weight: 700;

}
.item-location :first-child{
  top:1px;
  
}
/* 文本内容 */
.item-body {
  padding: .5rem;
}
.item-title {
  font-size: .8rem;
  color: #333333;
  text-align: left;

  font-weight: bold;
  /* font-family: PingFangSC-Medium; */
  overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 3; /*显示行数*/ 
  -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */ 
}
/* 底部 */
.item-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-footer-left{
  width:75%;
  display:flex
}
/* 头像 */
.avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}
.name {
  max-width: 70%;
  align-self:center; 
  overflow: hidden; 
  text-overflow: ellipsis; /*超出范围用省略号显示*/
  white-space:nowrap;  /*禁止换行*/
  padding-left: .1rem;
  font-size: .4rem;
  color: #777;
}
.like {
  color: #222;
  display: flex;
  font-size: .8rem;
  font-weight: 700;
}
.like :first-child{
  font-weight: 900;
}

</style>