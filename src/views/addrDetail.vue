<template>
  <!-- 景点详情页 -->
  <div class="addrDetail">
    <!-- 轮播图 -->
    <swipe :imgs="img"></swipe>
    <!-- 产品信息 -->
    <baseInfo :list="productInfo">
      <template slot="address">{{address}}</template>  
    </baseInfo>
    <!-- 日历 -->
    <div class="calendar">
      <van-cell title="选择日期" :value="date" @click="show = true" is-link/>
      <van-calendar v-model="show" color="#ffd90a" :formatter="formatter" 
      @confirm="onConfirm" confirm-text="确定"/>
    </div>  
    <!-- 出行人数 -->
    <div class="count">
      <span>出行人数</span>
      <van-stepper v-model="count" button-size="20px"/>
    </div>
    <!-- 详情 -->
    <info></info>
    <!-- 底部按键 -->
    <van-goods-action >
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="star-o" text="收藏" @click="onClickStar" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton"/>
    </van-goods-action>
    
  </div>   
</template>

<script>
import swipe from "@/components/product/swipe"
import baseInfo from "@/components/addr/baseInfo"
import info from "@/components/product/info"

export default {
  name:"addrDetail",
  components:{
    swipe,
    baseInfo,
    info,
  },
  data(){
    return {
      pid:this.$route.query.pid,  //产品id
      productInfo:[],  //产品数据
      address:[],      
      price:0,         //产品价钱
      img:[],   //产品图片
      count:1,         //出行人数
      date: '',        //日期
      show: false,     //日历显示状态
    };
  },
  methods:{
    formatter(day) { //日历方案
      day.bottomInfo="￥"+this.price
      return day;
    },
    formatDate(date) { //日期
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) { //日历点击确认按钮后触发
      this.show = false;
      this.date = this.formatDate(date);
    },
    onClickIcon() {   //点击客服图标
      this.$toast('点击图标');
    },
    onClickStar(){    //点击收藏图标
      this.$toast('收藏成功')
    },
    onClickButton(){  //点击购买图标
      if(!this.date){
        this.$toast('请选择出行日期');
        return;
      }
      this.axios.get('http://127.0.0.1:3000/checkLogin').then(res=>{
        if(res.data.code==-1){
          this.$toast("请登录");
          setTimeout(()=>{
            this.$router.push('/login')
          },500)
        }else{
          this.$router.push(`/placeOrder?pid=${this.pid}&count=${this.count}&date=${this.date}`)
        }
      })
      
    }
      
  },
  mounted(){
    this.axios.get('/qunarApi/addrDetail/id/'+this.pid).then(res=>{
      this.img.push(res.data.addrDetail[0].imgbg)
      this.address=res.data.addrDetail[0].baseinfo.address
      this.productInfo=res.data.addrDetail[0].ticketRecommend
      this.price=this.productInfo[0].price
      // console.log(this.address)
    })

  }

}
</script>

<style scoped>
/* 日历 */
.calendar{
  border-top:.5rem solid #f5f5f5
}
/* cell标题 */
.van-cell__title{
  text-align: left;
}
/* 出行人数 */
.count{
  padding:.7rem 1rem;
  display: flex;
  font-size: .9rem;
  justify-content: space-between;
}
.count :first-child{
  padding-top:.1rem;
}
</style>