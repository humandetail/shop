<template>
  <footer class="detail-footer border-top">
    <div class="item contact">
      <span class="icon iconfont icon-custom-service"></span>
      <span class="text">联系客服</span>
    </div>
    <div class="item shop">
      <span class="icon iconfont icon-shop"></span>
      <span class="text">店铺</span>
    </div>
    <router-link to="/cart" tag="div" class="item cart">
      <span class="icon iconfont icon-shoppingcart1">
      </span>
      <span class="text">购物车</span>
      <span class="cart-num">99+</span>
    </router-link>
    <button class="add-cart-btn">加入购物车</button>
  </footer>
</template>

<script>
export default {
  name: 'DetailFooter'
}
</script>

<style></style>
