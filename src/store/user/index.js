const state={    //储存共享数据
  uname:'',

};
const getters={  //获取共享数据的函数

};
const actions={  //数据需要异步操作时使用

};
const mutations={ //修改或操作共享数据的方法
  USER_INFO(state,user){     //大写区分状态管理的方法
    state.uname=user.uname
    sessionStorage.setItem("uname",user.uname);
  }
};
export default{
  namespaced:true, //命名空间，区分状态
  state, 
  getters,
  actions,
  mutations,
  
}