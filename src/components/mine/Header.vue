<template>
  <div class="header">
    <mt-header title="个人中心" class="mt-header">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      <div class="body-item">
        <img src="../../../public/img/avatar.jpg" alt="" class="avatar">
        <div class="umsg" >
          <div>用户A</div>
          <div>UID:123214342</div>
        </div>
      </div>
      <div class="body-btn" >
          <mt-button plain size="small" @click="jumpLogin" 
          v-show="isLogin">注册/登录</mt-button>
      </div>
    </div>
    <div class="footer" v-show="this.isLogin">
      <div>
        <div>7</div>
        <div>关注</div>
      </div>
      <div>
        <div>0</div>
        <div>粉丝</div>
      </div>
      <div>
        <div>0</div>
        <div>访客</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MineHeader',
  props:["isLogin"],
  data(){
    return{

    }
  },
  methods:{
    jumpLogin(){
      this.$router.push("/login")
    }
  },
  mounted(){
    console.log(this.isLogin)
  }
}
</script>

<style scoped>
/* 父元素 */
.header{
  height:220px;
  background-image:linear-gradient(to right,#ff0,#ffda44) ;
  border-bottom-left-radius:25%;
  border-bottom-right-radius:25%;
}
.mt-header{
  background-image:linear-gradient(to right,#ff0,#ffda44) ;
  font-weight:bold;
  color:#000
}
.body{
  display: flex;
  justify-content: space-between;
}
/* 用户信息 */
.body-item{
  display:flex;
  padding-left:1.5rem;

}
.avatar{
  width:3.5rem;
  height:3.5rem;
  border-radius: 50%;
}
.umsg{
  text-align: left;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:.6rem;

}
/* 用户名 */
.umsg :first-child{
  font-weight: bold;
  font-size:1.2rem
}
/* UID */
.umsg :last-child{
  padding-top:.5rem;
  font-size:.8rem;
}
/* 登录注册按钮 */
.body-btn{
  display: flex;
  flex-direction: column;
  padding-right:1rem;
  padding-top:1rem;
}

/* 关注&粉丝&访客 */
.footer{
  width:90%;
  margin:0 auto;
  display: flex;
  padding:.5rem;
  justify-content: space-around;
}
.footer div :first-child{
  font-weight: 700;
}
</style>