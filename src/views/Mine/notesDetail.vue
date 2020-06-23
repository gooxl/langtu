<template>
  <div class="notesDetail">
    <Swipe :notesImg="notesImg"></Swipe>
    <detail :list="list" :pid="pid"></detail>
  </div>
</template>

<script>
import Swipe from "@/components/traDetail/swipe" 
import detail from "@/components/comDetail/detail" 

export default {
  name:'notesDetail',
  components:{
    Swipe,
    detail,

  },
  data() {
    return {
      nid:this.$route.query.nid,
      pid:0,
      notesImg:[],
      list:{},
    };
  },
  methods: {

  },
  mounted(){
    // 获取图片
    this.axios.get('http://127.0.0.1:3000/getNotesPic?nid='+this.nid).then(res=>{
      this.notesImg=res.data.data;
    })
    // 获取游记数据
    this.axios.get('http://127.0.0.1:3000/getTraNote?nid='+this.nid).then(res=>{
      console.log(res.data.data)
      this.list=res.data.data[0]
      this.pid=res.data.data[0].pid
    })
  }
}
</script>

<style scoped>
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
/* 返回按钮 */
.back-icon{
  position: absolute;
  background-color:rgba(119, 116, 101, 0.5);
  text-align: center;
  border-radius: 50%;
  z-index:1;
  top:.3rem;
  left:.3rem;
}
.simg{
  width:100%;
  min-height: 100%;
}
</style>