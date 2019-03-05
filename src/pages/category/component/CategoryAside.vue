<template>
  <aside class="aside">
    <nav class="nav" ref="wrapper">
      <ul class="content">
        <li class="item">潮流女装</li>
        <li class="item">男装</li>
        <li class="item">品牌精选</li>
        <li class="item">人气美鞋</li>
        <li class="item">箱包</li>
        <li class="item">护肤美妆</li>
        <li class="item active">家居生活</li>
        <li class="item">手机数码</li>
        <li class="item">家用电器</li>
        <li class="item">潮流女装</li>
        <li class="item">男装</li>
        <li class="item">品牌精选</li>
        <li class="item">人气美鞋</li>
        <li class="item">箱包</li>
        <li class="item">护肤美妆</li>
        <li class="item">家居生活</li>
        <li class="item">手机数码</li>
        <li class="item">家用电器</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CategoryAside',
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style></style>
