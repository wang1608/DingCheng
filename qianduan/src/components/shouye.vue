<template>
  <div id="goods">
   

    <!-- 子路由匹配到的组件将渲染在这里 -->
    <keep-alive>
        <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
