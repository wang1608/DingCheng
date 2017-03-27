<template>
  <div id="detail">
    我是详情页面--{{ $route.params.id }}
  </div>
</template>

<script>
import router from "../router"; //自定义的路由模块
export default {
  name: 'detail',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
