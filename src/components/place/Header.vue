<template>
  <div class="p-header" >
    <div v-for="item of list" :key="item.id">
      <!-- 头部图片 -->
      <img :src="item.img" alt="" class="imgBox">
      <!-- 返回按钮 -->
      <router-link to="/">
        <van-icon name="arrow-left" color="#fff" size="30" class="back-icon"/>
      </router-link>
      <div class="textBox">
        <div class="title">{{item.pname}}</div>
        <span class="desc">疫情后我们一起旅行吧，
          去和错过的春天重逢和许久未见的老友赏花踏青；去远方看看那些已经复苏的城市🍃5月，
          一切都刚刚开始～</span>
      </div>
      <div class="placeholder"></div>
    </div>
  </div>      
</template>

<script>
export default {
  data(){
    return {
      list:[],
    };
  },
  props:["pid"],    //接收父组件place.vue的数据
  created(){
    this.axios.get('/getHotplace?pid='+this.pid).then(res=>{
      this.list=res.data.data;
      console.log(this.list)
    })
  }
}
</script>

<style scoped>
/* 父元素 */
.p-header{
  position: relative;
  box-sizing: border-box;
}
/* 背景图 */
.imgBox{
  height:13rem;
  width:100%;
}
/* 返回按钮 */
.back-icon{
  position: absolute;
  background-color:rgba(119, 116, 101, 0.5);
  text-align: center;
  border-radius: 50%;
  z-index:1;
  top:.3rem;
  left:.3rem;
}
/* .bg-mask{
  width:100%;
  height: 250px;
  background: linear-gradient(rgba(127, 102, 51, 0.2), rgb(127, 102, 51));
  display:block;
  position:absolute;
  z-index: 1;
  top:0;
} */
/* 文本 */
.textBox{
  width:90%;
  position:absolute;
  z-index:1;
  bottom:1rem;
  left:1rem;
  color:#fff;
  text-align: left;
}
.title{
  font-size:1.6rem;
  font-weight:bold;
  padding-bottom:.3rem
}
.desc{
  font-size: .6rem;
  overflow: hidden;
  white-space: pre-line;
  word-break: break-all;
}
/* 底部空白占位 */
.placeholder{
  background-color: #fff;
  width:100%;
  height: .5rem;
  border-radius: 5rem 5rem 0 0;
  position:absolute;
  z-index: 1;
  bottom:0;
}
</style>