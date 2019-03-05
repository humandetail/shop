<template>
  <div class="ctrl" :style="ctrlStyle">
    <ul class="fluid">
      <li class="item">
        <span class="name">综合</span>
        <span class="order icon iconfont icon-order-desc"></span>
      </li>
      <li class="item active">
        <span class="name">销量</span>
      </li>
      <li class="item">
        <span class="name">价格</span>
        <span class="order icon iconfont icon-orderby"></span>
      </li>
      <li class="item">
        <span class="name">筛选</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListCtrl',
  data () {
    return {
      ctrlStyle: {}
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top > 50) {
        this.ctrlStyle = {
          margin: 0,
          position: 'fixed',
          left: 0,
          top: 0,
          'z-index': 999,
          'border-bottom': '1px solid #ddd'
        }
      } else {
        this.ctrlStyle = {}
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style></style>
