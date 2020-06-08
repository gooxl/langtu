<template>
<!-- 游记评论列表 -->
  <div class="comment">
    <!-- 头 -->
    <div class="placeholder"></div>
    <mt-header title="回复" class="pro-header" fixed >
      <router-link to  slot="left">
        <mt-button icon="back" @click="$router.back(-1)" ></mt-button>
      </router-link>
    </mt-header> 
    <!-- 评论列表 -->
    <div class="body" v-for="(item,index) in commentList" :key="index">
      <div class="body-top">
        <div class="header-left">
          <div class="avatar">
            <img v-if="item.avatar" :src="item.avatar" alt="">
            <img v-else src="@/assets/img/avatar.png" alt="">
          </div>
          <div class="user">
            <div>{{item.uname}}</div>
            <span>{{item.ctime | ct}}</span>
          </div>
        </div>
        <div class="like">
          <van-icon name="good-job-o" />
          <span>{{item.likes}}</span>
        </div>
      </div>
      <div class="comment-info">{{item.comment}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      commentList:[],
      nid:this.$route.query.nid
    }
  },
  methods:{
    getComment(){
      this.axios.get('http://127.0.0.1:3000/getComment?nid='+this.nid).then(res=>{
        this.commentList=res.data.data;
        console.log(this.commentList)
      })
    }
  },
  created(){
    this.getComment();
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
  border-bottom: 1px solid #eee;
}
.body{
  padding:.5rem;
  margin:.3rem .8rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.body-top{
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
.user>div{
  font-weight: bold;
  font-size: .9rem;
}
/* 时间 */
.user>span{
  color:#666;
  font-size: .8rem;
}
.like {
  color: #222;
  display: flex;
  font-size: .8rem;
  padding-top:.6rem;

}
/* 评论内容 */
.comment-info{
  padding-left:2.5rem;
  padding-top:.2rem;
  font-size: .8rem;
}
</style>