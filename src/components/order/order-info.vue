<template>
  <div class="order-info">
    <div class="header" v-for="item of list" :key="item.pid">
      <img v-if="item.md" :src="`http://127.0.0.1:3000/${item.md}`"/>
      <img v-else :src="img" alt="">
      <div class="info-right">
        <div class="title">{{item.title}}</div>
        <div class="price">
          <span>¥</span>
          <span>{{item.price}}</span>
        </div>
      </div>
    </div>
    <div class="time">
      <span>出发日期</span>
      <!--子组件用<slot>定义插槽，名字跟父组件的slot属性的名字一致-->
      <slot name="date"></slot> 
    </div>
    <div class="count">
      <span>出行人数</span>
      <slot name="count"></slot>
    </div>
  
  </div>
</template>

<script>
export default {
  props:["list","img"],
  data() {
    return {

    };
  },
  created(){
    
  }

}
</script>

<style scoped>
/* 父元素 */
.order-info{
  margin:.5rem;
  padding:.5rem;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
  text-align: left;
  font-size: .9rem;
}
.order-info>div{
  padding-bottom: .5rem;
}
/* 产品信息 */
.header{
  display: flex;
}
.header>img{
  width:35%;
  border-radius: .2rem;
  margin-right: .8rem;
}
.info-right{
  position:relative;

}
.title{
  font-weight:600;

}
.price{
  padding-top:1rem;
  color:red;
  font-weight: bold;
  font-size: 1.2rem;
}
.price :first-child{
  font-size: .8rem;
}
.time :first-child{
  font-weight: 600;
  padding-right:.8rem;
}
.count :first-child{
  padding-right: .8rem;
  font-weight: 600;
}
</style>