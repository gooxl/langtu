<template>
  <!-- 热门好去处 -->
  <div class="place">
    <Header :pid="pid"></Header>
    <waterFalls ></waterFalls>
  </div>
</template>

<script>
import Header from "../components/place/Header"
import waterFalls from "../components/place/waterFalls"
export default {
  data(){
    return{
      pid:this.$route.query.pid,

    };
  },
  components:{
    Header,
    waterFalls
  },
  methods:{

  },
  mounted(){

  }
  
}
</script>

<style>

</style>