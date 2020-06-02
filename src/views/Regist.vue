<template>
  <!-- 注册页面 -->
  <div class="regist">
    <!-- 头 -->
    <div class="placeholder"></div>
    <mt-header  class="pro-header" fixed >
      <router-link to  slot="left">
        <mt-button icon="back" @click="$router.back(-1)" ></mt-button>
      </router-link>

    </mt-header> 
    <!-- 注册 -->
    <div class="body">
      <van-tabs v-model="active" color="#ffd90a">
        <van-tab title="帐号注册">
          <van-cell-group >
            <van-field v-model="uname" placeholder="请输入帐号" clickable clearable @blur="checkName"/>
            <van-field v-model="upwd" type="password" placeholder="请输入密码" clickable clearable/>
          </van-cell-group>
        </van-tab>
        <van-tab title="手机号快速注册">
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
      <van-button color="#ffda44" block @click="regist">注册</van-button>

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
    checkName(){
      this.axios.get("/checkName?uname="+this.uname).then(res=>{
        if(res.data.code==-1){
          this.$toast("用户名已存在");
          return;
        }
        if(!this.uname){
          this.$toast("用户名不能为空");
          return;
        }
      })
    },
    regist(){
      var reg=/^[a-z0-9]{3,12}$/i; 
      if(!this.uname){
        this.$toast("用户名不能为空");
        return;
      }else if(!reg.test(this.upwd)){
        this.$toast("密码不能为空");
        return;
      }
      var postData=this.qs.stringify({uname:this.uname,upwd:this.upwd});
      this.axios.post("/regist",postData).then(res=>{
        console.log(res.data)
        if(res.data.code==-1){
          this.$toast("注册失败")
        }else{
          this.$toast("注册成功");
          this.uname="";
          this.upwd=""
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
</style>