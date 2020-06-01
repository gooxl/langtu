<template>
  <div class="base_desc" >
    <div v-for="item of list" :key="item.pid">
      <div class="title">{{item.title}}</div>
      <div class="subtitle">{{item.subtitle}}</div>
      <div class="info">
        <div class="price">
          <span>¥</span>
          <span>{{item.price}}</span>
        </div>
        <div class="count">
          <span>已售</span>
          <span>{{item.sold}}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:["list"],  //接收product传的数据
}
</script>

<style  scoped>
/* 父元素 */
.base_desc{
  margin:0 .8rem;
  text-align:left;
}
.base_desc>div{
  padding-bottom:.5rem
}
.title{
  font-weight: bold;
  line-height: 1.3;
}
.subtitle{
  padding:.5rem 0;
  font-size:.95rem;
  line-height: 1.3;
  color:#666;
}
.info{
  display: flex;
  justify-content: space-between;
}
/* 价钱 */
.price{
  color:red;
}
.price :first-child{
  font-size: .5rem;
}
.price :nth-child(2){
  font-weight: bold;
  font-size: 1.5rem;
}
/* 已售 */
.count{
  padding-top:.5rem;
  color:#666;
  font-size: .9rem;
}
</style>