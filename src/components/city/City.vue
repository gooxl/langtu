<template>
  <div class="city">
    <Header></Header>
    <van-tabs v-model="active" sticky>
      <van-tab  :title="'境内'">
        <mt-index-list :show-indicator="false" >
          <!-- 热门城市 -->
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul >
              <li v-for="item in (domestic[0]?domestic[0].cities:'')" :key="item._id"
               @click="toCity(item.city_name,item._id)">{{item.city_name}}</li>
            </ul>
          </div>
          <!-- 城市列表 -->
          <div v-for="item in domestic.slice(1)" :key="item._id">
            <mt-index-section :index="item.title">
              <div v-for="innerItem of item.cities" :key="innerItem._id" 
                @click="toCity(innerItem.city_name,innerItem._id)">
                <mt-cell :title="innerItem.city_name" ></mt-cell>
              </div>
            </mt-index-section>
          </div>
        </mt-index-list>
      </van-tab>
      <van-tab  :title="'境外'">
        <mt-index-list :show-indicator="false" >
 
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul >
              <li v-for="item of (foreign[0]?foreign[0].cities:'')" :key="item._id"
               @click="toCity(item.city_name,item._id)">{{item.city_name}}</li>
            </ul>
          </div>
          <div v-for="item of foreign.slice(1)" :key="item._id">
            <mt-index-section :index="item.title">
              <div v-for="innerItem of item.cities" :key="innerItem._id" 
                @click="toCity(innerItem.city_name,innerItem._id)">
                <mt-cell :title="innerItem.city_name" ></mt-cell>
              </div>
            </mt-index-section>
          </div>
        </mt-index-list>
      </van-tab>

 
    </van-tabs>
    
  </div>
</template>

<script>
import Header from "../home/Header"
export default {
  name:"City",
  components:{
    Header,
  },
  data(){
    return{
      active:0,
      domestic:[],  //境内城市列表
      foreign:[],  //境外城市列表
    }
  },
  methods:{
    toCity(name,id){
      // 修改共享数据
      this.$store.commit('city/CITY_INFO',{name,id});
      window.localStorage.setItem('nowName',name); //并保存到localStorage
      window.localStorage.setItem('nowId',id);
      this.$router.push('/')
    }
  },
  mounted(){
    //使用本地储存localStorage保存城市数据，再次进入不用重新发请求
    var domestic=window.localStorage.getItem('domestic');
    var foreign=window.localStorage.getItem('foreign');
    if(domestic && foreign){  //如有本地存储
      this.domestic=JSON.parse(domestic);
      this.foreign=JSON.parse(foreign);
    }else{  //则不用请求
      this.axios.get('/qunarApi/cities').then((res)=>{
        this.domestic=res.data.cities[0].cityList.domestic;
        this.foreign=res.data.cities[0].cityList.foreign;
        window.localStorage.setItem('domestic',JSON.stringify(res.data.cities[0].cityList.domestic));
        window.localStorage.setItem('foreign',JSON.stringify(res.data.cities[0].cityList.foreign));
      })
    }
  }
}
</script>

<style scoped>
.header{color:black;background: #fff;}
.city{text-align: left;}
.city_hot{
  width:99.5%;
  padding:.5rem 0
}
.city_hot h2{
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background:#f0f0f0;
  font-weight: normal;}

.city_hot>ul{
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.city_hot>ul>li{
  align-self: center;
  background:#fff;
  width: 5rem;
  height: 33px;
  margin-top: 1rem;
  margin-left:3%;
  border: 1px solid #e6e6e6;
  border-radius:3px;
  line-height: 30px; 
  text-align: center;
  box-sizing: border-box;
  }

</style>