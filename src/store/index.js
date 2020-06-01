import Vue from 'vue'
import Vuex from 'vuex'
import city from './city' //模块化状态管理1.创建并引入状态文件

Vue.use(Vuex)

export default new Vuex.Store({
  state: {   //储存共享数据
  }, 
  mutations: { //修改或操作共享数据的方法
  },
  actions: {  //数据需要异步操作时使用
  },
  modules: {  
    city     //2.注册
  }
})
