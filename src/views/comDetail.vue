<template>
  <div class="traDetail">
    <swipe :notesImg="notesImg" ></swipe>
    <detail :list="list" :pid="pid"></detail>
    <comment :commentList="commentList" :cid="cid"></comment>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import swipe from "@/components/traDetail/swipe"  //表示src目录
import detail from "@/components/comDetail/detail"
import comment from "@/components/traDetail/comment"
import loading from "@/components/Loading/loading2"
export default {
  name:"comDetail",
  components:{
    swipe,
    detail,
    comment,
    loading
  },
  data(){
    return{
      cid:this.$route.query.cid,
      pid:this.$route.query.pid,
      nowCity:this.$store.state.city.name,
      notesImg:[],   //游记图片
      list:[],   //游记内容
      rows:{},   //头像和景点
      commentList:[],
      loading:true
    }
  },
  methods:{
    loadMore(){   //获取内容
      this.axios.get('/qunarApi/hostList/cityname/'+this.nowCity).then(res=>{

        var hostList=res.data.hostList[0].sightGroup
        for(var i=0;i<hostList.length;i++){
          if(hostList[i].id==this.pid){
            this.list=hostList[i].comment_item;
            this.list["title"]=hostList[i].title
            this.list["avatar"]=hostList[i].img
            // console.log(this.list)
            this.notesImg=hostList[i].comment_item.comment_img
            this.loading = false;
          }
        }
      })
    },
    // 获取评论内容
    getComment(){
      this.axios.get('http://127.0.0.1:3000/getComment?nid='+this.cid).then(res=>{
        this.commentList=res.data.data;
      })
    },
  },
  created(){
    this.loadMore();
    this.getComment();
  

  },
  mounted(){

  }

}
</script>

<style scoped>

</style>