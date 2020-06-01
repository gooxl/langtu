const state={    //储存共享数据
  name:window.localStorage.getItem('nowName') || '北京', //先获取本地存储的城市名，没有默认设为北京
  id:window.localStorage.getItem('nowId') || 1
};
const actions={  //数据需要异步操作时使用

};
const mutations={ //修改或操作共享数据的方法
  CITY_INFO(state,city){     //大写区分状态管理的方法
    state.name=city.name;
    state.id=city.id
  }
};
export default{
  namespaced:true, //命名空间，区分状态
  state, 
  actions,
  mutations
}