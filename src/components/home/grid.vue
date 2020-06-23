<template>
  <div class="grid">  
    <router-link tag="div" to="/productList" class="grid-item" v-for="item of gridInfo" :key="item._id">
      <img :src="item.img" ></img>
      <p>{{item.tname}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    gridInfo:Array
  }
}
</script>

<style scoped>
/* 宫格样式 */
.grid{

  overflow-x:auto ;
  white-space:nowrap;
}
.grid-item{
  padding:.5rem .3rem .6rem .3rem;
  width:20%;
  display: inline-block;

}
.grid-item img{
  width:3rem;height:3rem;

}
.grid-item p{
  font-size: .9rem;
  margin:0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  
}
</style>