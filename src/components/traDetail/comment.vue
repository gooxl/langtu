<template>
  <div class="comment">
    <div class="title">回复</div>
    <!-- 头部：发表框 -->
    <div class="header" @click="showPopup">成为第一个回复的人吧~</div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height:'30%'}">
      <van-field v-model="comment" rows="1" autosize type="textarea"
        placeholder="对TA说点什么吧..." autofocus/>
      <div class="sendBtn"  @click="sendComment">发送</div>
    </van-popup>
    <!-- 评论列表 -->
    <div class="body" v-for="(item,index) in commentList.slice(0,3)" :key="index">
      <div class="body-top">
        <div class="header-left">
          <div class="avatar">
            <img :src="item.avatar" alt="">
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
    <div class="footer" @click="jumpDetail">查看全部 {{commentList.length}} 条回复</div>
  </div>
</template>

<script>
export default {
  inject:['reload'], //一：通过inject来注入变量,用于刷新页面
  props:["commentList","nid"],
  data() {
    return {
      show: false,
      comment:'',
    };
  },
  methods:{
    // 显示弹出层
    showPopup() {
      this.show = true;
    },
    // 发表评论
    sendComment(){
      var length=this.comment.trim().length; //trim()去除字符串两端的空格
      if(length==0){ //如果内容为空，提示
        this.$toast("评论内容不能为空");
        this.show=false; //关闭弹出框
        return;
      }
      var postData=this.qs.stringify({
        nid:this.nid,
        comment:this.comment,
      });
      this.axios.post("/addComment",postData).then(res=>{
        this.$toast(res.data.msg);
        this.comment=""; //发表完成后清空文本框
        this.reload();   //二：调用App.vue定义的reload()方法刷新页面
        this.show=false; //关闭弹出框
      })
    },
    // 跳转评论详情
    jumpDetail(){
      this.$router.push('/commentList?nid='+this.nid)
    }
  }
}
</script>

<style scoped>
.comment{
  padding:.5rem;
  margin:0 .5rem;
  text-align: left;
}
.title{
  font-weight: bold;
  padding-bottom: .6rem;
}
/* 发表评论 */
.header{
  width:90%;
  padding: .5rem 1rem;
  background:#f5f5f5;
  border-radius: 25px;
  color:#999;
  font-size: .8rem;
}
/* 评论列表 */
.body{
  padding:.5rem 0;
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
.footer{
  text-align: center;
  padding:.8rem;
  color:rgb(65, 126, 240);
  font-size: .8rem;
}
.sendBtn{
  text-align: right;
  color: rgb(9, 94, 221);
  padding:.5rem 1rem
}
</style>