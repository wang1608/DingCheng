<template>
  <div id="app">
     <!-- 路由匹配到的组件将渲染在这里 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
        <!-- 使用 router-link 组件来导航. -->
        
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
html,body{
    height:100%;
    background: #eee
}
ul,li{
    list-style: none;
}
body{
  font-size: 0.3rem;
  
}
a{
  text-decoration: none;
  color:#fff;
}
.l{
  float:left;
}
.r{
  float: right
}
.footer{
    width: 100%;
    height:1.333333rem;
    display: flex;
    position:fixed;
    bottom:0;
    left:0;
    border-top: 1px solid #666
}
.footer li{
    flex:1;
   
    height:100%;
    text-align: center;
    background: #fff;
    font-size: .35rem;
    color:#333;

}
.footer li p.one{
  height:60%;
  font-size: .6rem;
  line-height: .9rem
}
.footer li p.two{
  height:40%;
  line-height: .5rem
}
.active2{
 
  color:  #B22222!important;
}
</style>
