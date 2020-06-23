<template>
  <div class="menu">
    <div class="menu-body">
      <div class="menu-top">
        <router-link tag="div" to="/myOrder">
          <img src="../../../public/img/icon/订单.png" alt="">
          <div>我的订单</div>
        </router-link>
        <div>
          <img src="../../../public/img/icon/优惠.png" alt="">
          <div>我的优惠</div>
        </div>
        <div>
          <img src="../../../public/img/icon/收藏.png" alt="">
          <div>我的收藏</div>
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-item-left">
          <div>旅行记录</div>
          <div>分享你的专属旅行记忆</div>
        </div>
        <div  class="menu-item-right" @click="showPopup">立即发布</div>
        <!-- 弹出层 -->
        <van-popup v-model="show" position="bottom" closeable duration=0.2
        close-icon-position="top-left" :style="{ height: '100%' }">
          <!-- 表单内容 -->
          <van-form @submit="onSubmit" class="form">
            <mt-field placeholder="添加标题(选填)" type="text" v-model="title"
           ></mt-field>
            <mt-field placeholder="请添加内容" type="textarea" rows="5" v-model="content"
            style="border-bottom:1px solid #f5f5f5"></mt-field>
            <!-- 上传文件 -->
            <van-field name="uploader">
              <template #input>
                <van-uploader v-model="uploader" multiple :after-read="onSubmit"/>
              </template>
            </van-field>
            <van-cell is-link @click="showOrder" >
              <van-icon name="orders-o" size="15" />
              <span>关联订单</span>
              <div class="order" v-if="this.assOrder">
                <span >{{assOrder}}</span>
                <div class="cross-btn" @click="remove"><van-icon name="cross" /></div>
              </div>
            </van-cell>
            <!-- 弹出层二：关联订单 -->
            <van-popup v-model="orders" position="bottom" closeable duration=0.2 
            close-icon-position="top-left" :style="{ height: '100%' }" >
              <div class="orders">
                <h3 >请选择本次旅行体验的订单</h3>
                <div v-for="item of list" :key="item.id" @click="selOrder(item.pid)">{{item.pname}}</div>
              </div>
            </van-popup>
            <!-- 提交按钮 -->
            <div style="margin: 15px;">
              <van-button round block type="info" native-type="submit" >
                提交
              </van-button>
            </div>
          </van-form>
        </van-popup>
      </div>
    </div>
    <img :src="this.img" alt="">
  </div>
</template>

<script>
export default {
  name:"Menu",
  data() {
    return {
      show: false,
      orders: false,
      title:"",     
      content:"",
      list:[],       
      assOrder:"",   //关联订单
      assOrderID:"",   
      pid:0,
      uploader: [],   //预览上传文件
      img:""
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showOrder(){
      this.orders = true;
      this.axios.get('http://127.0.0.1:3000/getOrder').then(res=>{
        this.list=res.data.data;
        console.log(this.list)
      })
    },
    selOrder(oid){
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].pid==oid){
          this.assOrder=this.list[i].pname;
          this.assOrderID=this.list[i].pid;
        }
      }
      this.orders = false;
    },
    remove(e){
      e.stopPropagation();
      this.assOrder=""
    },
    onSubmit(file){
      console.log(file)
      var postData=this.qs.stringify({
        title:this.title,
        content:this.content,
        assOrder:this.assOrder,
        assOrderID:this.assOrderID,
        city:localStorage.getItem('nowName'),
        cityid:localStorage.getItem('nowId'),
        uname:sessionStorage.getItem('uname')
      });
      // console.log(postData);
      if(!this.content){
        this.$toast('请输入内容')
        return;
      }
      // (async function(){
        new Promise((resolve,reject)=>{
          this.axios.post("http://127.0.0.1:3000/upload",postData).then(res=>{
            resolve(res.data)
            let postImg=new FormData();
            postImg.append('file',file.content)
            postImg.append('nid',res.data.data.insertId)
            console.log(postImg.getAll('file'))
            this.axios.post("http://127.0.0.1:3000/uploadImg",postImg).then(result=>{
              console.log(result.data)
            })
          });
        })
      // })()
    },
  },
  mounted(){
    // this.axios.get('http://127.0.0.1:3000/getNotesPic?nid=24').then(res=>{
    //   this.img=res.data.data[0].lg
    //   console.log(this.img)
    // })
  }
}
</script>

<style scoped>
/* 父元素 */
.menu{
  width:95%;
  background-color:#fff;
  margin:-50px auto;
  overflow: hidden;
  border-radius: 10px;
  
}
/* 四图标 */
.menu-top{
  display: flex;
  justify-content: space-around;
  padding-top:.7rem;
  padding-bottom:.7rem;
  border: 2px solid #F0F0F0;
  border-radius: 10px;
  overflow: hidden;
}
.menu-top div img{
  width:2rem;
  height:2rem;
}
.menu-top div div{
  font-size: .8rem;
  padding-top:.1rem;
}
/* 旅行记录 */
.menu-item{
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border:2px solid #f0f0f0;
  margin-top:.5rem;
  padding:.7rem;
  font-weight:600 ;
  font-size: .9rem;
}
.menu-item-left{
  text-align:left;
}
.menu-item-left :last-child{
  color:#666;
  font-weight: 500;
  font-size: .6rem;
  padding-top:.3rem
}
.menu-item-right{
  align-self: center;
  background:#ffda44;
  border-radius: 20px;
  padding:.3rem;
  font-size:.7rem
}
/* 弹出层——form表单 */
.form{
  margin-top:40px
}
/* 弹出层二——order */
.orders{
  text-align: left;
  margin:3.5rem 1rem;
}
.orders div{
  font-weight: 500;
  padding:1rem .2rem;
  border-bottom:1px solid #f5f5f5;
}
.order{
  width:90%;
  border-radius: 5px;
  background:#eee;
  padding:.5rem;
  display: flex;
  position: relative;
  margin-left:.7rem;
  font-weight: 500;
  
}
.cross-btn{
  z-index: 100;
  position:absolute;
  right:0;
  top:0;
  background: #ccc;
  padding: 0 .2rem;
  overflow: hidden;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>