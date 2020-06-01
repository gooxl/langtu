<template>
  <!-- 产品页 -->
  <div class="scenicSpot">
    <!-- 轮播图 -->
    <swipe :imgs="productImg"></swipe>
    <!-- 产品信息 -->
    <baseDesc :list="productInfo"></baseDesc>
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
import swipe from "../components/product/swipe"
import baseDesc from "../components/product/base-desc"
import info from "../components/product/info"

export default {
  components:{
    swipe,
    baseDesc,
    info,
  },
  data(){
    return {
      pid:this.$route.query.pid,  //产品id
      productInfo:[],  //产品数据
      price:0,         //产品价钱
      productImg:[],   //产品图片
      count:1,         //出行人数
      date: '',        //日期
      show: false,     //日历显示状态
    };
  },
  methods:{
    getProductInfo(){ //获取产品数据
      this.axios.get('/getProductInfo?pid='+this.pid).then(res=>{
        this.productInfo=res.data.data;
        this.price=res.data.data[0].price;
      })
    },
    getImg(){ //获取轮播图
      this.axios.get('/getProductImg?pid='+this.pid).then(res=>{
        this.productImg=res.data.data;
      })
    },
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
      this.$router.push(`/placeOrder?pid=${this.pid}&count=${this.count}&date=${this.date}`)
    }
      
  },
  created(){
    this.getProductInfo();
    this.getImg();

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