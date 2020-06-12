<template>
  <!-- 热门景点&人气美食&特色商圈 -->
  <div class="tab">
    <van-tabs v-model="active" color="#ffd90a" animated swipeable>
      <!-- 热门景点 -->
      <van-tab title="热门推荐" title-style="font-weight:bolder;font-size:1rem">
        <router-link tag="div" v-for="item of tabList.slice(0,4)" :key="item.id"
        :to="'/addrDetail?pid='+item.id" class="tab-content">
          <img class="tab-content-img" :src="item.img" />
          <div class="tab-content-right">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.feature}}</div>
            <div class="rate">
              <span>评分:{{item.score}}</span>
              <van-rate v-model="item.score" allow-half void-icon="star" void-color="#eee" 
              size="15px"/>
            </div>
            <!-- 标签 -->
            <!-- <div class="tab-content-right-middle" >
              <van-tag color="#ffe1e1" text-color="red" ></van-tag>
            </div> -->
            <div class="tab-content-right-bottom">
              <div class="tab-content-comment">
                <span>{{item.comment_num}}</span> 
                </div>
              <div class="tab-content-price">
                <span>¥</span>
                <span>{{item.price}}</span>
                <span>起></span>
              </div>
            </div>
          </div>
        </router-link>
        <!-- 底部按钮 -->
        <div class="tab-bottom-btn">
          <span>查看全部景点</span> 
          <van-icon name="arrow" size=".8rem"/>
        </div>
      </van-tab>
      <van-tab title="人气景点" title-style="font-weight:bolder;font-size:1rem">
        <router-link tag="div" class="tab-content" :to="'/addrDetail?pid='+item.id"
        v-for="item of tabList.slice(4,8)" :key="item.id">
          <img class="tab-content-img" :src="item.img" />
          <div class="tab-content-right">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.feature}}</div>
            <div class="rate">
              <span>评分:{{item.score}}</span>
              <van-rate v-model="item.score" allow-half void-icon="star" void-color="#eee" 
              size="15px"/>
            </div>
            <!-- 标签 -->
            <!-- <div class="tab-content-right-middle" >
              <van-tag color="#ffe1e1" text-color="red" ></van-tag>
            </div> -->
            <div class="tab-content-right-bottom">
              <div class="tab-content-comment">
                <span>{{item.comment_num}}</span> 
                </div>
              <div class="tab-content-price">
                <span>¥</span>
                <span>{{item.price}}</span>
                <span>起></span>
              </div>
            </div>
          </div>
        </router-link>
        <!-- 底部按钮 -->
        <div class="tab-bottom-btn">
          <span>查看全部景点</span> 
          <van-icon name="arrow" size=".8rem"/>
        </div>

      </van-tab>
      <van-tab title="特色商圈" title-style="font-weight:bolder;font-size:1rem">
        <router-link tag="div" class="tab-content" :to="'/addrDetail?pid='+item.id"
        v-for="item of tabList.slice(8,12)" :key="item.id">
          <img class="tab-content-img" :src="item.img" />
          <div class="tab-content-right">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.feature}}</div>
            <div class="rate">
              <span>评分:{{item.score}}</span>
              <van-rate v-model="item.score" allow-half void-icon="star" void-color="#eee" 
              size="15px"/>
            </div>
            <!-- 标签 -->
            <!-- <div class="tab-content-right-middle" >
              <van-tag color="#ffe1e1" text-color="red" ></van-tag>
            </div> -->
            <div class="tab-content-right-bottom">
              <div class="tab-content-comment">
                <span>{{item.comment_num}}</span> 
                </div>
              <div class="tab-content-price">
                <span>¥</span>
                <span>{{item.price}}</span>
                <span>起></span>
              </div>
            </div>
          </div>
        </router-link>
        <!-- 底部按钮 -->
        <div class="tab-bottom-btn">
          <span>查看全部景点</span> 
          <van-icon name="arrow" size=".8rem"/>
        </div>

      </van-tab>


    </van-tabs>
  </div>
</template>

<script >
export default {
  props:{
    tabList:Array,
  },
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped>
  /* 父元素 */
.tab{
  text-align: left;
  box-sizing: border-box;
  margin:.5rem
}
.tab-content{
  padding-top:.5rem;
  display:flex;
}
/* 左图 */
.tab-content>img{
  width:38%;
  border-radius:.5rem;

}
/* 右内容 */
.tab-content-right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:63%;
  padding-left:.5rem;
}
/* 标题&预订按钮 */
.title{
  font-weight: bolder;
  font-size: 1rem;
  overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 2; /*显示行数*/ 
  -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */ 
}
/* 描述 */
.desc{
  padding-top: .5rem;
  line-height: 1.5;
  font-size: .8rem;
  color:#666;
}
/* 评分 */
.rate{
  font-size: .8rem;
  /* color:#666; */
}
.rate>span{
  padding-right: .3rem;
}
/* 标签 */
/* .tab-content-right-middle{
  text-align: left;
  padding-top:.5rem;
}
.tab-content-right-middle span{
  margin-right:.3rem;
} */
/* 点评&门票 */
.tab-content-right-bottom{
  vertical-align: top;
  padding-top:.9rem;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
}
/* 评论 */
.tab-content-comment{
  padding-top:.4rem;
}
.tab-content-comment :first-child{
  font-weight: bolder;
  
}
/* 门票价钱 */
.tab-content-price{
  /* position:absolute; */
  right:5%;
  padding-bottom:.3rem
}

.tab-content-price :nth-child(1){
  padding-left:.1rem;
  font-size:.1rem;
  color:red;
}
.tab-content-price :nth-child(2){
  font-weight: bolder;
  font-size:1.1rem;
  color:red;
}
/* 底部按钮 */
.tab-bottom-btn{
  text-align: center;
  margin-top:.5rem;
  padding:.5rem;
  color:#777;
  vertical-align: top;
  border:2px solid #f0f0f0;
  border-radius:10px;
}

</style>