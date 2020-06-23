<template>
  <div class="notes">
    <div class="header">我的记录</div>
    <div class="body" >
      <router-link tag="div" class="item" v-for="(item,index) in notesData" 
      :key="index" :to='`/notesDetail?nid=${item.nid}`'>
        <div class="top">
          <img v-if="item.lg" :src="item.lg" alt="">
          <div class="item-location">
            <van-icon name="location-o" />
            <span>{{item.position}}</span>
          </div>
        </div>
        <div class="item-body">
          <div class="item-title">{{item.content}}</div>
          <div class="item-footer">
            <div class="item-footer-left">
              <div v-if="item.avatar" class="avatar"
              :style="{backgroundImage : `url(${item.avatar})`}"
              ></div>
              <img v-else src="@/assets/img/avatar.png" alt="" class="avatar">
              <div class="name">{{item.name}}</div>
            </div>
            <div class="like">
              <van-icon name="like-o"/>
              <span>{{item.likes}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="noData" v-show="notesData.length==0">暂无记录,快去发布您的精彩瞬间吧！</div>
  </div>
</template>

<script>
export default {
  name:"notes",
  props:{notesData:Array}
}
</script>

<style scoped>
.notes{
  box-sizing: border-box;
  margin-top:60px;
  padding:.1rem .5rem;
  text-align: left;
}
.header{
  font-weight: bold;
  font-size: .9rem;
  padding:.2rem .2rem;
  border-bottom: 1px solid #f5f5f5;
}
.body{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item{
  width:48.5%;
  overflow: hidden;
  border-radius: 8px;
  border:2px solid #f5f5f5;
}
.top{
  position: relative;
}
/*图片*/
.top img{
  height: 140px;
}
/* 位置 */
.item-location{
  position:absolute;
  z-index:1;
  background-color:rgba(0,0,0,.3);
  bottom:.5rem;
  left:.5rem;
  border-radius:2rem;
  color:#fff;
  font-size: .6rem;
  font-weight: 700;
  max-width: 70%;
  align-self:center; 
  overflow: hidden; 
  text-overflow: ellipsis; /*超出范围用省略号显示*/
  white-space:nowrap;  /*禁止换行*/

}
.item-location :first-child{
  top:1px;
  
}
/* 文本内容 */
.item-body {
  padding: .5rem;
}
.item-title {
  font-size: .8rem;
  color: #333333;
  text-align: left;

  font-weight: bold;
  /* font-family: PingFangSC-Medium; */
  overflow: hidden;
  /* 文本显示现行，多出隐藏，用省略号显示 */
  text-overflow:ellipsis; /* 用省略号显示超出的文本 */
  display: -webkit-box;  /*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/ 
  -webkit-line-clamp: 3; /*显示行数*/ 
  -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */ 
}
/* 底部 */
.item-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-footer-left{
  width:75%;
  display:flex
}
/* 头像 */
.avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}
.name {
  max-width: 70%;
  align-self:center; 
  overflow: hidden; 
  text-overflow: ellipsis; /*超出范围用省略号显示*/
  white-space:nowrap;  /*禁止换行*/
  padding-left: .1rem;
  font-size: .4rem;
  color: #777;
}
.like {
  color: #222;
  display: flex;
  font-size: .8rem;
  font-weight: 700;
}
.like :first-child{
  font-weight: 900;
}
.noData{
  padding-top:.8rem;
  font-size: .9rem;
  text-align: center;
  color:#666
}
</style>