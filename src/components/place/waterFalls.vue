<template>
  <!-- 瀑布start -->
  
  <div class="water-fall">
 
    <waterfall :col="col" :data="data" @loadmore="loadmore" >
      <template> 
        <div class="fall-item" v-for="(item,index) in data" :key="index">
        <router-link :to="`/tradetail?nid=${item.nid}`">
          <div class="fall-img">
            <img  v-lazy="item.lg" alt="加载错误">
            <div class="item-location">
              <van-icon name="location-o" />
              <span>{{item.city}}·{{item.position}}</span>
            </div>
          </div>
          <div class="item-body">
            <div class="item-title">{{item.content}}</div>
            <div class="item-footer">
              <div class="item-footer-left">
                <div v-if="item.avatar" class="avatar"
                :style="{backgroundImage : `url(${item.avatar})`}"
                ></div>
                <div class="name">{{item.uname}}</div>
              </div>
              <div class="like">
                <van-icon name="like-o"/>
                <span>{{item.likes}}</span>
              </div>
            </div>
          </div>
        </router-link>
        </div>
      </template>
    </waterfall>

    <!-- loading -->
    <loading :show="loading"/>
    
    </div><!-- 瀑布end -->
  </div>
</template>

<script>
import loading from "@/components/Loading/loading";


export default {
  name:"place-waterFalls",
  components: {
    loading
  },
  data() {
    return {
      data: [],
      col: 2,  //列数
      loading: true,  //加载状态

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
      this.loading = true;
      setTimeout(() => {
        this.data = this.data.concat(this.data);
        this.loading = false;
      }, 100);
    },
    loadMore(){   //获取内容
      this.axios.get('/getTraNotes').then(res=>{
        this.data=res.data.data;
        this.loading=false;
      })
    },
    jump(e){
      var id=e.target.dataset.id;
      console.log(e)
      this.$router.push('/tradetail?id='+id);
    }
  },
  created() {
    this.loadMore();
    // this.data = this.originData;

    
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
   overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 1; /*显示行数*/ 
  -webkit-box-orient: vertical;
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