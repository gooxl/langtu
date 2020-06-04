<template>
  <div class="header">
    <div v-for="item of list" :key="item.uid">
      <div class="body" v-if="list.length>0" >
        <div class="body-item">
          <img v-if="item.avatar" :src="item.avatar" alt="" class="avatar">
          <img v-else src="@/assets/img/avatar.png" alt="" class="avatar">
          <div class="umsg" >
            <span v-if="item.nickName">{{item.nickName}}</span>     
            <span v-else>{{item.uname}}</span>     
            <span v-show="item.isAdmin">管理员</span>
          </div>
        </div>
         <div class="body-btn"  v-if="item.isAdmin">
            <mt-button plain size="small" @click="jumpAdmin" 
            >进入管理后台</mt-button>
          </div>
      </div>
     
      <div class="footer" >
        <div>
          <div>{{item.follow}}</div>
          <div>关注</div>
        </div>
        <div>
          <div>{{item.fans}}</div>
          <div>粉丝</div>
        </div>
        <div>
          <div>{{item.callers}}</div>
          <div>访客</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MineHeader',
  data(){
    return{
      list:[],

    }
  },
  methods:{
    loadMore(){
      var uname=sessionStorage.getItem('uname')
      this.axios.get('http://127.0.0.1:3000/getUser?uname='+uname).then(res=>{
        this.list=res.data.data;
        console.log(this.list)
      })
    },
    jumpAdmin(){
      this.$router.push("/admin")
    }
  },
  created(){
    this.loadMore()

  
  }
}
</script>

<style scoped>
/* 父元素 */
.header{
  height:11rem;
  background-image:linear-gradient(to right,#ff0,#ffda44) ;
  border-bottom-left-radius:25%;
  border-bottom-right-radius:25%;
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
/* 用户身份 */
.umsg :last-child{
  padding-top:.5rem;
  font-size:.8rem;

}
/* 登录注册按钮 */
.body-btn{

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