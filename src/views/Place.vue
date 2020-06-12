<template>
  <!-- 热门好去处 -->
  <div class="place">
    <Header :title="title" :img="img"></Header>
    <waterFalls :pid="pid"></waterFalls>
  </div>
</template>

<script>
import Header from "../components/place/Header"
import waterFalls from "../components/place/waterFalls"
export default {
  data(){
    return{
      pid:this.$route.query.pid,
      title:'',
      img:''
    };
  },
  components:{
    Header,
    waterFalls
  },
  methods:{

  },
  created(){
    var cityId=this.$store.state.city.id;
    this.axios.get('/qunarApi/hostList/cityid/'+cityId).then(res=>{
      var popPlace=res.data.hostList[0].sightGroup
      for(var item of popPlace){
        if(this.pid==item.id){
          this.title=item.title;
          this.img=item.img
        }
      }
    })
  }
  
}
</script>

<style>

</style>