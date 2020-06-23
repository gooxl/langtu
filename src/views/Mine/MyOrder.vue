<template>
  <div class="myOrder">

      <div  class="placeholder"></div>
      <mt-header title="我的订单" class="mt-header" fixed>
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.go(-1)"></mt-button>
        </router-link>
      </mt-header>
      <!-- tabs -->
      <van-tabs v-model="active" color="#ffd90a" animated 
        swipeable sticky :offset-top="40">
      <van-tab title="全部" title-style="font-weight:bolder;font-size:.5rem;">
        <div class="order" v-for="(item,index) in list" :key="index" >
          <router-link class="content" tag="div" :to="`/orderDetail?oid=${item.id}`" >
            <van-icon name="bookmark-o" size="21" color="#07c160" />
            <div class="title">
             <span>{{item.pname}}</span>
             <p>出行日期：{{item.travelDate}}</p>
            </div>
            <div class="status">
              <div>{{item.status}}</div>
              <span>¥ </span>
              <span>{{item.totalPrice}}</span>
            </div>
          </router-link>
          <div class="btn">
            <mt-button type="danger" size="small">删除订单</mt-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付" title-style="font-weight:bolder;font-size:.5rem">
        <div class="order" v-for="(item,index) in list" :key="index" v-if="item.status=='待支付'">
          <router-link class="content" tag="div" :to="`/orderDetail?oid=${item.id}`" >
            <van-icon name="bookmark-o" size="21" color="#07c160" />
            <div class="title">
             <span>{{item.pname}}</span>
             <p>出行日期：{{item.travelDate}}</p>
            </div>
            <div class="status">
              <div>{{item.status}}</div>
              <span>¥ </span>
              <span>{{item.totalPrice}}</span>
            </div>
          </router-link>
          <div class="btn">
            <mt-button type="danger" size="small">删除订单</mt-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="待出行" title-style="font-weight:bolder;font-size:.5rem">
        <div class="order" v-for="(item,index) in list" :key="index" v-show="item.status=='待出行'">
          <router-link class="content" tag="div" :to="`/orderDetail?oid=${item.id}`" >
            <van-icon name="bookmark-o" size="21" color="#07c160" />
            <div class="title">
             <span>{{item.pname}}</span>
             <p>出行日期：{{item.travelDate}}</p>
            </div>
            <div class="status">
              <div>{{item.status}}</div>
              <span>¥ </span>
              <span>{{item.totalPrice}}</span>
            </div>
          </router-link>
          <div class="btn">
            <mt-button type="danger" size="small">删除订单</mt-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成" title-style="font-weight:bolder;font-size:.5rem">
        <div class="order" v-for="(item,index) in list" :key="index" v-show="item.status=='已完成'">
          <router-link class="content" tag="div" :to="`/orderDetail?oid=${item.id}`" >
            <van-icon name="bookmark-o" size="21" color="#07c160" />
            <div class="title">
             <span>{{item.pname}}</span>
             <p>出行日期：{{item.travelDate}}</p>
            </div>
            <div class="status">
              <div>{{item.status}}</div>
              <span>¥ </span>
              <span>{{item.totalPrice}}</span>
            </div>
          </router-link>
          <div class="btn">
            <mt-button type="danger" size="small">删除订单</mt-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="取消/退款" title-style="font-weight:bolder;font-size:.5rem">
        <div class="order" v-for="(item,index) in list" :key="index" v-show="item.status=='已退款'">
          <router-link class="content" tag="div" :to="`/orderDetail?oid=${item.id}`" >
            <van-icon name="bookmark-o" size="21" color="#07c160" />
            <div class="title">
             <span>{{item.pname}}</span>
             <p>出行日期：{{item.travelDate}}</p>
            </div>
            <div class="status">
              <div>{{item.status}}</div>
              <span>¥ </span>
              <span>{{item.totalPrice}}</span>
            </div>
          </router-link>
          <div class="btn">
            <mt-button type="danger" size="small">删除订单</mt-button>
          </div>
        </div>
      </van-tab>
      
    </van-tabs>

  </div>
</template>

<script>
export default {
  name:'myOrder',
  data(){
    return{
      active:0,
      list:[],
    }
  },
  mounted(){
    this.axios.get('http://127.0.0.1:3000/getOrder').then(res=>{
      this.list=res.data.data
      console.log(this.list)
    })
  }
}
</script>

<style scoped>
.placeholder{
  height:40px;
}
.mt-header{
  background-image:linear-gradient(to right,#ff0,#ffda44) ;
  font-weight:bold;
  color:#000
}
.order{
  margin:.5rem;
  padding:.5rem;
  border:2px solid #f5f5f5;
  border-radius:10px;

}
.content{
  display: flex;
  justify-content:space-between;
  line-height: 1.5;
}
.title{
  text-align: left;
  
  width:70%
}
.title>span{
  font-weight: bold;
  font-size:.8rem;
  vertical-align:top;

}
.title>p{
  font-size: .5rem;
  color:#666;
}
.status{
  font-weight:550;
  font-size:.8rem;
}
.btn{
  text-align: right;
}
.btn div{
  border-radius:5px;
  border:1px solid #f1f1f1
}
</style>