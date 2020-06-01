<template>
  <!-- 产品列表 -->
  <div class="list">
      <div class="list-content" v-for="item of list" :key="item.pid">
        <router-link :to="`/product?pid=${item.pid}`">
          <img class="list-content-img" :src="'http://127.0.0.1:3000/'+item.md"/>
          <div class="list-days">{{item.days}}天</div>
          <div class="list-content-right"  >
            <div class="title">{{item.title}}</div>
            <div class="list-content-right-middle" >
              <!--将keyword的字符串切割再遍历-->
              <van-tag color="#ffe1e1" text-color="red" v-for="kw of item.keyword.split('、')">{{kw}}</van-tag>
            </div>
            <div class="list-content-right-bottom">
              <div class="list-content-comment">
                <span>已售</span>
                <span>{{item.sold}}</span> 
              </div>
              <div class="list-content-price">
                <span>¥</span>
                <span>{{item.price}}</span>
                <span>起></span>
              </div>
            </div>
          </div>
        </router-link>  
      </div>
    
  </div>
</template>

<script>
export default {
  props:["list"],  //接收productList的数据
  data(){
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.list{
  margin:0 1rem;
}
.list-content{
  padding:.5rem 0;
  border-bottom:1px solid #f5f5f5;
  
}
.list-content>:first-child{
  display:flex;
}
/* 左图 */
.list-content-img{
  width:38%;
  border-radius:.5rem;
  position: relative;

}
/* 天数标签 */
.list-days{
  position:absolute;
  background:#ffd90a;
  color:crimson;
  overflow:hidden;
  padding:.1rem;
  font-size: .9rem;
  border-top-left-radius: .3rem ;
  border-bottom-right-radius: .3rem ;

}
/* 右内容 */
.list-content-right{
  width:63%;
  padding-left:.5rem;
}
/* 标题&预订按钮 */
.title{
  font-weight: bolder;
  font-size: .9rem;
  text-align: left;
  overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 2; /*显示行数*/ 
  -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */ 
}

/* 标签 */
.list-content-right-middle{
  text-align: left;
  padding-top:.5rem;
}
.list-content-right-middle span{
  margin-right:.3rem;
}
/* 点评&门票 */
.list-content-right-bottom{
  vertical-align: top;
  padding-top:.9rem;
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
}
/* 已售 */
.list-content-comment{
  padding-top:.4rem;
  color:#666;
}

.list-content-comment :first-child{
  font-weight: bolder;

  
}
/* 门票价钱 */
.list-content-price{
  padding-bottom:.3rem
}

.list-content-price :nth-child(1){
  padding-left:.1rem;
  font-size:.1rem;
  color:red;
}
.list-content-price :nth-child(2){
  font-weight: bolder;
  font-size:1.1rem;
  color:red;
}

</style>