<template>
  <!-- 游记详情 -->
  <div class="detail">
    <div v-for="(item,index) in list" :key="index">
      <div class="header">
        <div class="header-left">
          <div class="avatar">
            <img :src="item.avatar" alt="">
          </div>
          <div>
            <div>{{item.uname}}</div>
            <span>{{item.date | ct}}</span>
          </div>
        </div>
        <div class="like">
          <van-icon name="like-o" color="red"/>
          <span>{{item.likes}}</span>
        </div>
      </div>
      <!-- 定位 -->
      <div class="opsition">
        <div>
          <van-icon name="location" />
          <span>{{item.city}}</span>
        </div>
        <div>
          <span>{{item.position}}</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:["list"]

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