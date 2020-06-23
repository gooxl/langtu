<template>
  <!-- 游记详情 -->
  <div class="detail">
      <div class="header">
        <div class="header-left">
          <div class="avatar">
            <img v-if="this.list.avatar" :src="this.list.avatar" alt="">
            <img v-else src="@/assets/img/avatar.png" alt="" class="avatar">
          </div>
          <div>
            <span >{{this.list.date | ct}}</span>
            <div >{{this.list.name}}</div>
          </div>
        </div>
        <!-- 评分 -->
        <!-- <div class="score">
          <van-rate v-model="this.list.score" allow-half void-icon="star" 
          void-color="#eee" readonly :size="18"/>
        </div> -->
      </div>
      <!-- 定位 -->
      <div class="opsition">
        <div>
          <van-icon name="location" />
          <span v-if="this.list.city">{{this.list.city}}</span>
          <span v-else>{{$store.state.city.name}}</span>
        </div>
        <div @click="jumpAddrDetail">
          <slot name="title"></slot>
          <span v-if="this.list.title">{{this.list.title}}</span>
          <span v-else>{{this.list.position}}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 内容 -->
      <div class="content" v-if="this.list.comment_text">{{this.list.comment_text}}</div>
      <div class="content" v-else>{{this.list.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"com_detail",
  props:["list","pid","avatar"],
  methods:{
    jumpAddrDetail(){
      this.$router.push('/addrDetail?pid='+this.pid)
    }
  },
  mounted(){
  }
  
}
</script>

<style scoped>
/* 父元素 */
.detail{
  padding:.5rem;
  margin:.5rem;
  text-align: left;
  border-bottom: 1px solid #eee;

}

.header{
  display:flex;
  justify-content: space-between;
}
.header-left{
  display: flex;
}
.avatar{
  padding-right:.5rem;
}
.avatar img{
  width:2rem;
  height:2rem;
  border-radius: 50%;
}
/* 名字 */
.header :last-child>div{
  font-weight: bold;
  font-size: .9rem;
}
/* 时间 */
.header :last-child>span{
  color:#666;
  font-size: .8rem;
}
.like {
  color: #222;
  display: flex;
  font-size: .8rem;
  padding-top:.5rem;
}
/* 景点 */
.opsition{
  padding:.5rem 0;
  display:flex;
  font-size: .9rem;
  
}
.opsition div{
  padding: .2rem .3rem;
  margin-right: .5rem;
  background-color:#f1f1f1;
  border-radius:25px;
}
.opsition div :first-child{
  top:.1rem
}
.opsition :last-child :nth-child(2){
  top:.1rem;
  font-weight: bold;
}
.content{
  line-height: 1.5;
  white-space:pre-line;
  /* text-indent: 2rem; */
}
</style>