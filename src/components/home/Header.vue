<template>
  <!-- home的header -->
  
    <div class="header" >
      <div class="placehold"></div>
        <div class="header-body">
        <router-link tag="div" to="/city" class="header-left" >
          <van-icon name="location-o" size="20"/>
          <span>{{$store.state.city.name}}</span>
        </router-link>
        <div class="header-input" >
          <van-icon name="search" size="20"/>
          <div>目的地/关键字</div>
      </div>
      </div>
    </div>

</template>

<script>
export default {
  name:'HomeHeader',
  data(){
    return{

    }
  },
  created(){

  }
}
</script>

<style scoped>
/*  */
.placehold{
  height: 5%;
}
.header-body{ 
  width:100%;
  height: 5%;
  top:0;
  align-items:center;
  display:flex;
  padding:.5rem .5rem;
  box-sizing: border-box;
  
}
.header-left{
  display: flex;
  color:#666;
  width: 28%;
}
.header-left :last-child{
  line-height:1.3;
  text-align: left;
  white-space:nowrap ;
  width: 80%;    /*根据自己项目进行定义宽度*/
	overflow: hidden;     /*设置超出的部分进行影藏*/
	text-overflow: ellipsis;     /*设置超出部分使用省略号*/
	white-space:nowrap ;    /*设置为单行*/
 }
/* 搜索框 */
.header-input{
  align-items:center;
  line-height:1.5;
  width:70%;
  display:flex;
  background-color: #ddd;
  border-radius:10px;
  color: #333;
  opacity: .4;
  margin-left:.5rem;
  padding-left:.5rem;
}
</style>

