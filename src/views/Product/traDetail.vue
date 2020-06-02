<template>
  <div class="traDetail">
    <swipe :notesImg="notesImg"></swipe>
    <detail :list="list"></detail>
    <comment :commentList="commentList" :nid="nid"></comment>

  </div>
</template>

<script>
import swipe from "@/components/traDetail/swipe"  //表示src目录
import detail from "@/components/traDetail/detail"
import comment from "@/components/traDetail/comment"
export default {
  components:{
    swipe,
    detail,
    comment,
  },
  data(){
    return{
      nid:this.$route.query.nid,
      notesImg:[],   //游记图片
      list:[],   //游记内容
      commentList:[],
    }
  },
  methods:{
    // 获取游记图片
    getNotesImg(){ 
      this.axios.get('/getNotesPic?nid='+this.nid).then(res=>{
        this.notesImg=res.data.data;
      })
    },
    // 获取游记内容
    getNotesInfo(){
      this.axios.get('/getNotesInfo?nid='+this.nid).then(res=>{
        this.list=res.data.data;
      })
    },
    getComment(){
      this.axios.get('/getComment?nid='+this.nid).then(res=>{
        this.commentList=res.data.data;
      })
    }
  },
  created(){
    this.getNotesImg();
    this.getNotesInfo();
    this.getComment();
  }

}
</script>

<style scoped>

</style>