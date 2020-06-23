<template>
  <div class="traDetail">
    <swipe :notesImg="notesImg"></swipe>
    <detail :list="list" :pid="pid">
      <!-- <template slot="author">{{author}}</template> -->
    </detail>
    <comment :commentList="commentList" :cid="cid"></comment>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import swipe from "@/components/traDetail/swipe"  //表示src目录
import detail from "@/components/traDetail/detail"
import comment from "@/components/traDetail/comment"
import loading from "@/components/Loading/loading2"
export default {
  name:"traDetail",
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
      commentList:[],
      loading:true
    }
  },
  methods:{
    // 获取游记图片
    // getNotesImg(){ 
    //   this.axios.get('/getNotesPic?nid='+this.nid).then(res=>{
    //     this.notesImg=res.data.data;
    //   })
    // },
    // 获取游记内容
    // getNotesInfo(){
    //   this.axios.get('/getNotesInfo?nid='+this.nid).then(res=>{
    //     this.list=res.data.data;
    //   })
    // },
    loadMore(){   //获取内容
      if(this.pid && this.cid){
        this.axios.get('/qunarApi/comments?sightId='+this.pid).then(res=>{
          var commentList=res.data.answer.body.data.commentList
          for(var i=0; i<commentList.length; i++){
            if(commentList[i].commentId==this.cid){
              this.notesImg=commentList[i].imgs;

              this.list=commentList[i];
              // console.log(this.list)
              this.loading = false;
            }
          }
        })
      }else if(!this.cid){
        this.axios.get('/qunarApi/hostList/cityname/'+this.nowCity).then(res=>{
          var hostList=res.data.hostList[0].sightGroup
          // console.log(hostList)
          for(var i=0;i<hostList.length;i++){
            if(hostList[i].id==this.pid){
              this.list=hostList[i];
              this.notesImg=hostList[i].comment_item.comment_img
              this.loading = false;
            }
          }
        })
      }
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