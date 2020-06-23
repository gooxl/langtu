<template>
  <div class="orderDetail">
    <div  class="placeholder"></div>
    <mt-header title="订单详情" class="mt-header" fixed>
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="body" v-for="(item,index) in list" :key="index">
      <div class="top">
        <div class="status">
          <div>{{item.status}}</div>
          <span>期待您的下次出行</span>
        </div>
        <div class="price">
          <div>
            <span>¥</span>
            <span>{{item.totalPrice.toFixed(2)}}</span>
          </div>
          <!-- <span>价格明细</span> -->
        </div>
      </div>
      <div class="proInfo">
        <div>产品信息</div>
        <div>{{item.pname}}</div>
        <div>入住时间：{{item.travelDate}}</div>
        <div>价格：¥{{item.price}} x {{item.peopleCount}}</div>
        <van-button type="primary" size="small" color="#7232dd" plain round 
        @click="jumpPro" :data-pid="item.pid">重新购买</van-button>
      </div>
      <div class="userInfo">
        <div>出行人信息</div>
        <div>
          <span>联系人：</span>
          <span>{{item.userName}}</span>
        </div>
        <div>
          <span>手机号：</span>
          <span>{{item.phone}}</span>
        </div>
        <div>
          <span>邮箱：</span>
          <span>{{item.email}}</span>
        </div>
        <div>
          <span>备注：</span>
          <span>{{item.remarks}}</span>
        </div>
      </div>  
    </div>

  </div>
</template>

<script>
export default {
  name:'orderDetail',
  data(){
    return{
      list:[],
      oid:this.$route.query.oid

    }
  },
  methods:{
    jumpPro(e){
      var pid=e.target.dataset.pid
      if(pid.length>5){
        this.$router.push('/addrDetail?pid='+pid)
      }else{
        this.$router.push('/product/'+pid)
      }
      
    }
  },
  mounted(){
    this.axios.get('http://127.0.0.1:3000/getOrder?oid='+this.oid).then(res=>{
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
.body{
  text-align:left;
}
.top{
  height: 3rem;
  background-image:linear-gradient(to right,rgb(247, 247, 110),rgb(245, 245, 94));
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 1rem;
}
.status>div{
  font-weight: bold;
}
.status>span{
  font-size: .8rem;
  color:#666
}
.price>div{
  color:red;
}
.price>div :first-child{
  font-size: .5rem;
}
.price>span{
  font-size: .5rem;
}
.proInfo{
  margin:.5rem;
  padding:.5rem;
  font-size: .9rem;
  line-height:1.5;
  border-radius:5px;
  border:2px solid hsl(0, 0%, 96%);

}
.proInfo :first-child{
  font-weight: bold;
}
.proInfo>:last-child{
 right:-75%
  
}
.userInfo{
  margin:.5rem;
  padding:.5rem;
  font-size: .9rem;
  line-height:1.5;
  border-radius:5px;
  border:2px solid #f5f5f5;
}
.userInfo>:first-child{
  font-weight: bold;
}
</style>