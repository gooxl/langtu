<template>
<!-- 首页玩法推荐组件 -->
  <div class="recomment">
    <div class="rec-title">

      <span>玩法推荐</span>
      <span>查看全部></span>
    </div>
    <div class="rec-body">
      <ul>
        <router-link  to="/recommend">
        <li >
            <div class="rec-img">
              <!-- 图左 -->
              <img src="../../../public/img/2.jpg" class="rec-img-left" />
              <!-- 图右 -->
              <div class="rec-img-right">
                <img src="../../../public/img/1.jpg"  />
                <img src="../../../public/img/3.png"  />
              </div>
            </div>
            <div class="rec-text" >
              <van-icon name="bullhorn-o" color="#ffd90a"/>
              <span>物美价廉淘货圣地</span>
            </div>
        </li>
        </router-link>
        <li >
          <div class="rec-img">
            <!-- 中图 -->
            <img src="../../../public/img/2.jpg" class="rec-img-left" />
            <!-- 小图 -->
            <div class="rec-img-right">
              <img src="../../../public/img/1.jpg"/>
              <img src="../../../public/img/3.png"/>
            </div>
          </div>
          <div class="rec-text">
            <van-icon name="bullhorn-o" color="#ffd90a"/>
            <span>上下九必吃</span>
          </div>
        </li>
        <li >
          <div class="rec-img">
            <!-- 中图 -->
            <img src="../../../public/img/2.jpg" class="rec-img-left" />
            <!-- 小图 -->
            <div class="rec-img-right">
              <img src="../../../public/img/1.jpg"/>
              <img src="../../../public/img/3.png"/>
            </div>
          </div>
          <div class="rec-text">
            <van-icon name="bullhorn-o" color="#ffd90a"/>
            <span>上下九必吃</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
/* 父元素 */
.recomment{
  margin:.5rem;

}
/* 标题栏 */
.rec-title{
  padding-bottom:0.3rem;
  padding-top:0.5rem;
  display:flex;
  justify-content: space-between;
}
.rec-title :first-child{
  font-weight:bold;
}
.rec-title :last-child{
  font-size: .9rem;
  color:#777;
  padding-top:0.1rem;
}
/* 内容外层父元素 */
.rec-body ul{
  overflow-x: auto; /*横向内容溢出，滚动显示*/ 
  white-space: nowrap;

}
.rec-body li{
  width:47%;
  /* padding:.2rem; */
  display:inline-block;  /*使元素横排*/ 
  margin-right:0.4rem;
  overflow: hidden;
}
/* 隐藏滚动条 */
.rec-body ul::-webkit-scrollbar{ 
  display: none;
}
/* li内图片内容外层父元素*/
.rec-img{
  box-sizing: border-box;
  /* width:100%;
  height:100%; */
  display:flex;
  border-radius: 6px;
  overflow: hidden;
}
/*左图片 */
.rec-img-left{
  width:60%;
  margin-right:.1rem;
}
/*右图片 */
.rec-img-right{
  width:50%;
  height:100%;
  display:flex;
  flex-direction: column;
}
.rec-img-right :first-child{
  margin-bottom:.1rem;
}
.rec-img-right img{
  width:100%;
} 
/* 标题内容 */
.rec-text{
  padding-top:.5rem;
  font-size:.9rem;
  text-align:left;
  color:#000;
}
</style>