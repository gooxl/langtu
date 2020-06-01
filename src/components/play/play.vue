<template>
  <div class="play">
    <!-- 头 -->
    <div class="header">
      <div class="user">
        <div class="avatar" ></div>
        <div class="info">
          <div >帽帽</div>
          <van-tag color="#f2826a"  plain>大玩家</van-tag>
        </div>
      </div>
      <div class="follow">
        <van-icon name="plus" color="#fff" size="10"/>
        <span>关注</span>  
      </div>
    </div>
    <!-- 描述 -->
    <div class="desc">
      <span>待到春回大地时你会选择去看樱花、油菜花还是内蒙古的杜鹃花</span>

    </div>
    <!-- 图片or视频 -->
    <div class="imgBox">
      <img src="../../../public/img/gc.png" alt="" v-for="n in 1" >
    </div>
    <div class="footer">
      <span class="location">
        <van-icon name="location" />
        <span>内蒙古</span> 
      </span>
      <span class="right">
        <span class="like">
          <van-icon name="good-job-o" size="1rem"/>
          <span>112</span>
        </span>
        <span class="comment">
          <van-icon name="comment-o" size="1rem"/>
          <span>11231</span>
        </span>

      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* 父元素 */
.play{
  margin:.6rem;
  padding:1rem;
  border:2px solid #f0f0f0;
  border-radius: 10px;
}
/* 头 */
.header{
  display: flex;
  justify-content:space-between;
}
/* 头像&用户名&标签外层元素 */
.user{
  display: flex;
  text-align: left;
}
.avatar{
  width:2.2rem;
  height:2.2rem;
  background:url(../../../public/img/avatar.jpg) no-repeat ;
  background-position:center;
  background-size:contain;
  border-radius: 50%;
}
/*用户名&标签外层元素 */
.info{
  padding-left:.2rem;
  font-size:.9rem;
}
/* 用户名 */
.info :first-child{
  font-weight: 600;
  padding-bottom: .1rem;
}
/* 标签 */
.info :last-child{
  padding-top:0rem;
  padding-bottom:0rem
}
/* 关注 */
.follow{
  align-self: center;
  border-radius: 25px;
  padding:.20rem .6rem;
  background-color:rgb(30, 184, 25);
  color:#fff;
  font-size: .8rem;
  font-weight:600;
}
.follow :first-child{
  top:.05rem;
  padding-right: .1rem;
  font-weight:600;
}
/* 描述 */
.desc{
  padding-top:.5rem;
  text-align: left;
  color:#666;
  font-size: .8rem;
}
/* 图片 */
.imgBox{
  margin:.26rem 0;
  overflow: hidden;
  text-align: left;
}
.imgBox img{
  width:100%;
  border-radius: .18rem;
}
/* 尾部 */
.footer{
  padding-right:.5rem;
  display:flex;
  justify-content: space-between;
}
/* 位置 */
.location{
  background-color:#eee;
  padding:.1rem .4rem 0rem 0rem;
  border-radius: 25px;
  font-size: 1px;
}
.location :first-child{
  top:.1rem;
  padding-right:.1rem
}
/* 赞 */
.like{
  padding-right: .5rem;
}
.like :first-child{
  top:.05rem;
}
/* 评论 */
.comment :first-child{
  top:.05rem;
}



</style>