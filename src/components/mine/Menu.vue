<template>
  <div class="menu">
    <div class="menu-body">
      <div class="menu-top">
        <div>
          <img src="../../../public/img/icon/订单.png" alt="">
          <div>我的订单</div>
        </div>
        <div>
          <img src="../../../public/img/icon/优惠.png" alt="">
          <div>我的优惠</div>
        </div>
        <div>
          <img src="../../../public/img/icon/收藏.png" alt="">
          <div>我的收藏</div>
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-item-left">
          <div>旅行记录</div>
          <div>分享你的专属旅行记忆</div>
        </div>
        <div  class="menu-item-right">立即发布</div>
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
.menu{
  width:90%;
  
  background-color:#fff;
  margin:-50px auto;
  overflow: hidden;
  border-radius: 10px;
  
}
/* 四图标 */
.menu-top{
  display: flex;
  justify-content: space-around;
  padding-top:.7rem;
  padding-bottom:.7rem;
  border: 2px solid #F0F0F0;
  border-radius: 10px;
  overflow: hidden;
}
.menu-top div img{
  width:2rem;
  height:2rem;
}
.menu-top div div{
  font-size: .8rem;
  padding-top:.1rem;
}
/* 旅行记录 */
.menu-item{
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border:2px solid #f0f0f0;
  margin-top:.5rem;
  padding:.7rem;
  font-weight:600 ;
  font-size: .9rem;
}
.menu-item-left{
  text-align:left;
}
.menu-item-left :last-child{
  color:#666;
  font-weight: 500;
  font-size: .6rem;
  padding-top:.3rem
}
.menu-item-right{
  align-self: center;
  background:#ffda44;
  border-radius: 20px;
  padding:.3rem;
  font-size:.7rem
}
</style>