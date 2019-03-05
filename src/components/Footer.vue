<template>
  <div class="footer" id="footer">
    <router-link to="/" tag="div" class="item">
      <span class="icon iconfont icon-home"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/category" tag="div" class="item">
      <span class="icon iconfont icon-category"></span>
      <p>分类</p>
    </router-link>
    <router-link to="/cart" tag="div" class="item">
      <span class="icon iconfont icon-cart"></span>
      <p>购物车</p>
    </router-link>
    <router-link to="/my" tag="div" class="item">
      <span class="icon iconfont icon-my"></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style></style>
