<template>
  <div class="baseInfo" >
    <div v-for="item of list.slice(0,1)" :key="item._id">
      <div class="title">{{item.title}}</div>
      <div class="address">
        <span>地址：</span>
        <slot name="address"></slot>
      </div>

      <van-tag plain type="success" class="tag" 
      v-for="(innerItem,index) in item.tags.slice(0,5)" :key="index">{{innerItem}}</van-tag>
      <div class="info">
        <div class="price">
          <span>¥</span>
          <span>{{item.price}}</span>
        </div>
        <div class="count">
          <!-- <span>已售</span> -->
          <!-- <span>{{item.sold}}</span> -->
          <span v-for="(innerItem,i) in item.tags.slice(-1)" :key="i">{{innerItem}}</span> 
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:"addr-info",
  props:["list"],  //接收product传的数据
  data() {
    return {
     
      
    };
  },
   methods: {

  },
  mounted(){
    // this.axios.get('http://127.0.0.1:3000/getProductInfo?pid='+this.pid).then(res=>{
    //   this.productInfo=res.data.data;
    //   console.log(this.productInfo)
    //   this.price=res.data.data[0].price;
    // },
 
  }
}
</script>

<style  scoped>
/* 父元素 */
.baseInfo{
  margin:0 .8rem;
  text-align:left;
}
.baseInfo>div{
  padding-bottom:.5rem
}
.title{
  font-weight: bold;
  line-height: 1.3;
}
.address{
  padding:.5rem 0;
  font-size:.95rem;
  line-height: 1.3;
  color:#666;
}
/* 标签*/
.tag{
  margin:.5rem .2rem .5rem 0
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