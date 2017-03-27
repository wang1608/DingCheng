<template>
  <div id="app">
        购物车
     <ul class="footer">
          <router-link to="/shouye" tag="li" active-class="active2">
            <p class="one iconfont">&#xe601;</p>
            <p class="two">鼎城商城</p>
          </router-link>
          <router-link to="/faxian" tag="li" active-class="active2">
            <p class="one iconfont">&#xe604;</p>
            <p class="two">分类</p>
          </router-link>
          <router-link to="/dingdan" tag="li" active-class="active2">
            <p class="one iconfont">&#xe661;</p>
            <p class="two">社区</p>
          </router-link>
          <router-link to="/shopcar" tag="li" active-class="active2">
            <p class="one iconfont">&#xe682;</p>
            <p class="two">购物车</p>
          </router-link>
          <router-link to="/wode" tag="li" active-class="active2">
            <p class="one iconfont">&#xe624;</p>
            <p class="two">我的</p>
          </router-link>
        </ul>    
  </div>

</template>

<script>
export default {
  
}
</script>

<style>


</style>
