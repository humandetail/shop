<template>
  <section class="product-size">
    <div class="section">
      <span class="title">已选</span>
      <div class="text">i5，8G+128G，2代新品 13.5英寸，1件，可选服务</div>
      <span class="icon"></span>
    </div>
    <div class="select-wrapper">
      <div class="close-btn">×</div>
      <div class="pro-info">
        <div class="pro-cover">
          <img src="/static/images/goods/detail/detail_01.png" alt="pro-cover">
        </div>
        <div class="pro-price">
          <span>￥</span>
          <em>13299</em>
          <span>.00</span>
        </div>
        <div class="pro-id">
          商品编号：7629588
        </div>
      </div>
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="item">
            <div class="title">颜色</div>
            <ul class="size">
              <li class="size-item active">
                <span>i5 8G 128G 13.3英寸银</span>
              </li>
              <li class="size-item">
                <span>i5 8G 128G 13.3英寸灰</span>
              </li>
              <li class="size-item">
                <span>i5 8G 256G 13.3英寸银</span>
              </li>
              <li class="size-item">
                <span>i5 8G 256G 13.3英寸灰</span>
              </li>
              <li class="size-item">
                <span>四核八代i5 8G 256G 13.3英寸银</span>
              </li>
              <li class="size-item">
                <span>四核八代i5 8G 256G 13.3英寸灰</span>
              </li>
              <li class="size-item">
                <span>六核八代i7 16G 256G 15.4英寸银</span>
              </li>
              <li class="size-item">
                <span>六核八代i7 16G 256G 15.4英寸灰</span>
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="title">数量</div>
            <div class="number">
              <span class="icon iconfont icon-minus disabled"></span>
              <input type="text" value="1" class="value">
              <span class="icon iconfont icon-plus"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="addcart-btn">
        加入购物车
      </div>
    </div>
    <div class="select-mask"></div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ProductSize',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style></style>
