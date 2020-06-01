<template>
  <div class="wrapper" ref="wrapper">
    <!-- 封装betterScroll组件 实现滚动、tap点击事件 -->
    <!-- 实现条件：容器高度与父容器高度相同 -->
    
    <slot></slot>
  </div> 
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'Scroller',
  props:{
    handleToScroll:{ //公共滚动函数
      type:Function,
      default: function(){}
    },
    handleToTouchEnd:{ //公共点击结束函数
      type:Function,
      default:function(){}
    }
  },
  mounted(){
    var scroll=new BScroll(this.$refs.wrapper,{//会用ref属性绑定要成为容器的元素
      tap:true,   //开启使用tap事件功能 (移动端点击事件tap)
      prodeType:1 //1.滚动时触发scroll事件，会截流2.滚动时实时触发scroll事件，不会截流，3.除了实时触发scroll事件在swipe情况下还能实时触发scroll事件	
    });
    scroll.on('scroll',(pos)=>{ //滚动事件
      this.handleToScroll(pos)
    })
    scroll.on('touchEnd',(pos)=>{ //点击结束事件
      this.handleToTouchEnd(pos)
    })
  }
}
</script>

<style scoped>
.wrapper{
  height:100%;
}
</style>