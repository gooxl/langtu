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
      nowcity:this.$store.state.city.name,
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
    this.axios.get('/qunarApi/hostList/cityname/'+this.nowcity).then(res=>{
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