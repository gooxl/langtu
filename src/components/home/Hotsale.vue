<template>
  <!-- 爆款热卖 -->
  <div class="hotsale">
    <div class="hs-header">爆款热卖</div>
    <div class="hs-content" v-for="item of hotList" :key="item.id">
      <router-link tag="div" :to="`/product?pid=${item.id}`">
        <div class="hs-img">
          <img :src="item.img" />
        </div>
        <div class="hs-title">{{item.title}}</div>
        <div class="hs-desc">{{item.desc}}</div>
        <div class="hs-bottom">
          <div>      
            <span>已售</span>
            <span>{{item.sold}}</span>
          </div>
          <div class="price">
            <span>¥</span>
            <span>{{item.price}}起</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    hotList:Array
  },
  data(){
    return{
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
/* 父元素 */
.hotsale{
  margin:.5rem;
  text-align: left;
}
.hs-header{
  font-size: 1.2rem;
  font-weight: bold;
}
.hs-content{
  padding-top:.8rem;
  padding-bottom:.8rem;
  border-bottom:1px solid #f5f5f5;

}
/* 图片 */
.hs-img>img{
  position: relative;
  width:100%;
  height:12rem;
  border-radius: .5rem;
}
/* 标题 */
.hs-title{
  font-weight: bold;
  color:#555;
  padding:.5rem 0 .5rem 0
}
/* 描述*/
.hs-desc{
  font-size: .8rem;
  color:#666;
  padding:.5rem 0;
}
/* 底部 */
.hs-bottom{
  display:flex;
  justify-content: space-between;
}
.price{
  color:red;
  padding-right: .2rem;
}
.price :first-child{
  font-size: .6rem;
}

</style>