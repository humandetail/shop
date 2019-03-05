<template>
  <div :class="{'cart-footer': true, 'border-top': true, 'selected': selected}">
    <div class="select-icon-fluid" @click="handleSelectAll">
      <span class="select-icon"></span>
    </div>
    <span class="select-btn" @click="handleSelectAll">全选</span>
    <div class="sum">
      <div class="none" v-if="!selected">合计:￥0.00</div>
      <div class="all">
        <em>合计:￥23,456.00</em>
        <span>总额:￥23,447.00 运费:￥9.00</span>
      </div>
    </div>
    <button class="pay-btn">去结算(<i>3</i>)</button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  props: {
    selected: Boolean
  },
  methods: {
    handleSelectAll () {
      this.$emit('selectAll', !this.selected)
    }
  }
}
</script>

<style></style>
