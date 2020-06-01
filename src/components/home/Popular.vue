<template>
<!-- 热门好去处 -->
  <div class="popular">
    <div class="pop-title">热门好去处</div>
    <div class="pop-body">
      <div class="pop-item" v-for="item of popPlace" :key="item.id">
        <img :src="item.img" class="pop-img" :data-pid="item.id" @click="jump"/>
        <div class="pop-text" >
          <div>{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:{
   popPlace:Array
 },
 data(){
   return{
     list:[],
   };
 },
 methods:{

    jump(e){ //跳地方详情
      var pid=e.target.dataset.pid;
      this.$router.push("/place?pid="+pid)
    }
  },
  created(){

  }
}
</script>

<style scoped>
/* 父元素 */
.popular{
  margin:.5rem;
}
/* 标题栏 */
.pop-title{
  padding-bottom:0.3rem;
  text-align: left;
  font-weight: bold;
}
/* 内容外层父元素 */
.pop-body{
  overflow-x: auto; /*横向内容溢出，滚动显示*/ 
  white-space: nowrap;
}
.pop-item{
  width:45%;
  height:100%;
  display:inline-block;  /*使元素横排*/ 
  border-radius: 5px;
  padding-right:0.4rem;
}
/* 隐藏滚动条 */
.pop-body::-webkit-scrollbar{ 
  display: none;
}
/*图片 */
.pop-img{

  width:100%;
  height:6rem;
  border-radius:7px;

}
/* 标题内容 */
.pop-text{
  padding-top:.3rem;

  font-size:.8rem;
  text-align:left;
  color:#666;
}
.pop-text>div{
  font-weight:bolder;
  padding-bottom:.3rem;
  font-size: .9rem;
  color:#000;
}
</style>