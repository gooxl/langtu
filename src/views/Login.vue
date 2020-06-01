<template>
  <div class="login">
    <!-- 头 -->
    <div class="placeholder"></div>
    <mt-header  class="pro-header" fixed >
      <router-link to  slot="left">
        <mt-button icon="back" @click="$router.back(-1)" ></mt-button>
      </router-link>

    </mt-header> 
    <!-- 登录 -->
    <div class="body">
      <van-tabs v-model="active" color="#ffd90a">
        <van-tab title="普通登录">
          <van-cell-group >
            <van-field v-model="uname" placeholder="请输入用户名" clickable clearable/>
            <van-field v-model="upwd" type="password" placeholder="请输入密码" clickable clearable/>
          </van-cell-group>
        </van-tab>
        <van-tab title="短信验证码登录">
          <van-cell-group>
            <van-field v-model="tel" type="tel" placeholder="请输入手机号" clickable clearable/>
            <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
              <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
          </van-cell-group>
        </van-tab>
      </van-tabs>
      <van-button color="#ffda44" block @click="login">登录</van-button>
      <div class="link-area">
        <!-- tag="标签名"，使router-link最终编译为该标签名 -->
        <router-link tag="a" to="/regist">
          <span>注册账号</span>
        </router-link> 
        <span class="spliter"> | </span> 
        <router-link tag="a" to="/regist">
          <span>忘记密码</span>
        </router-link>
			</div>
    </div>
    <div class="footer">
      <van-divider :style="{color:'#ccc', borderColor:'#ccc'}" >使用第三方账号登录</van-divider>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      uname:"",
      upwd:"",
      tel:"",
      sms:""
    };
  },
  methods:{
    login(){
      var reg=/^[a-z0-9]{3,12}$/i; 
      if(!this.uname){
        this.$toast("用户名不能为空");
        return;
      }else if(!reg.test(this.upwd)){
        this.$toast("密码不能为空");
        return;
      }
      var obj={uname:this.uname,upwd:this.upwd};
      this.axios.get("/login",{params:obj}).then(res=>{
        if(res.data.code==-1){
          this.$toast("用户名或密码有误")
        }else{
          this.$toast("登录成功");
          this.$router.go(-1) //跳转加登录前页面
        }
      })
    }
  }
}
</script>

<style scoped>
/* 头 */
.placeholder{
  height:40px;
}
.pro-header{
  color:#000;
  background:#fff;

}
.body{
  margin:3rem .5rem;
}
.link-area {

  margin-top: 1rem;
  text-align: center;
}
/*  */

</style>