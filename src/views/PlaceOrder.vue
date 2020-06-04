<template>
  <div class="placeOrder">
    <!-- 头 -->
    <div class="placeholder"></div>
    <mt-header title="订单确认" class="pro-header" fixed >
      <router-link to  slot="left">
        <mt-button icon="back" @click="$router.back(-1)" ></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> 
    <!-- 产品信息 -->
    <orderInfo :list="productInfo" >
    <!--在子组件标签中创建一张卡片用slot属性绑定子组件对应名字，再用{{}}绑定要传给子组件的数据 -->
      <template slot="date">{{date}}</template>
      <template slot="count">{{count}}</template>
    </orderInfo> 
    <!-- 预订人信息 -->
    <div class="contacts-msg">
      <div class="title">预订人信息</div>
      <mt-field label="联系人" placeholder="请输入联系人" type="text" 
      v-model="uname" @change="nameChange()" :state="this.nameState"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" 
      v-model="phone" @change="telChange()" :state="this.telState" ></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="text" v-model="email"></mt-field>
      <mt-field label="备注" placeholder="如有特殊需要请备注" type="textarea" rows="3" v-model="remarks"></mt-field>
    </div>
    <!-- 提交按钮 -->
    <van-submit-bar :price="this.price*this.count*100" button-text="提交订单" 
    @submit="onSubmit" text-align="left" label="总价：" />
  </div>
</template>

<script>
import orderInfo from "@/components/order/order-info"

export default {
  components:{
    orderInfo,
  },
  data(){
    return {
      pid:this.$route.query.pid,      //产品ID
      count:this.$route.query.count,  //出行人数
      date:this.$route.query.date,    //出生日期
      productInfo: {},                //产品数据
      pname:"",
      price:0,
      uname:"",  
      phone:"",
      email:"",   
      remarks:"",        //备注
      telState:"",       //手机号输入状态
      nameState:"",      //联系人输入状态
    }
  },
  methods:{
    loadMore(){ //加载产品数据
      this.axios.get('http://127.0.0.1:3000/getProductInfo?pid='+this.pid).then(res=>{
        this.productInfo=res.data.data;
        this.pname=res.data.data[0].title;
        this.price=res.data.data[0].price;
      })
    },
    telChange(){
      if(!(/^1[3456789]\d{9}$/.test(this.phone))){
        this.telState="error"
      }else{
        this.telState="success"
      }
    },
    nameChange(){
      if(!this.uname){
        this.nameState="error"
      }else{
        this.nameState="success"
      }
    },
    onSubmit(){
      if(!this.phone){
        this.$toast("请输入手机号");
        return;
      }
      if(!this.uname){
        this.$toast("请输入联系人")
        return;
      }
      if(!this.uname){
        this.$toast("请输入邮箱")
        return;
      }
 
      var remarks=this.remarks;
      var pid=parseInt(this.pid);
      var userName=this.uname;
      var phone=this.phone;
      var email=this.email;
      var pname=this.pname;
      var peopleCount=parseInt(this.count);
      var travelDate=this.date;
      var price=parseInt(this.price);
      var totalPrice=parseInt(this.count)*parseInt(this.price);
      // var obj={
      //   remarks:this.remarks,
      //   pid:parseInt(this.pid), 
      //   userName:this.uname,
      //   phone:this.phone,
      //   email:this.email,
      //   pname:this.pname,
      //   peopleCount:parseInt(this.count),
      //   travelDate:this.date,
      //   price:parseInt(this.price),
      //   totalPrice:parseInt(this.count)*parseInt(this.price)
      // }
      // console.log(obj)
      // 13232323232
      this.axios.get(`/addOrder?pid=${pid}&pname=${pname}&userName=${userName}&phone=${phone}&email=${email}&peopleCount=${peopleCount}&travelDate=${travelDate}&price=${price}&totalPrice=${totalPrice}&remarks=${remarks}`)
      // this.axios.get("/addOrder",{parmas:obj})
      .then(res=>{
        if(res.data.code==-1){
          this.$messagebox("提示","请登录") //用户点击按钮后，才跳转
          .then(result=>{
            this.$router.push("/login")
          })
        }else if(res.data.code==-2){
          this.$toast("提交失败")
        }else{
          this.$toast("提交成功")
        }
      })
    },
  },
  created(){
    this.loadMore();
  }

}
</script>

<style scoped>
/* 头部 */
.placeholder{
  height:40px;
}
.pro-header{
  color:#000;
  background:#ffda44;
}
/* 预订人信息 */
.contacts-msg{
  margin:.5rem;
  padding:.5rem;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
  text-align: left;
  font-size: .1rem;
}
.title{
  font-weight: bold;
  font-size: 1rem;
}
</style>