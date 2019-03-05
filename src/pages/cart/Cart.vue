<template>
  <div class="cart-page">
    <cart-header></cart-header>
    <cart-list :selected="selectAll" @selectAll="handleSelectAll"></cart-list>
    <cart-footer :selected="selectAll" @selectAll="handleSelectAll"></cart-footer>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CartHeader from './component/CartHeader'
import CartList from './component/CartList'
import CartFooter from './component/CartFooter'
import CommonFooter from '@/components/Footer'
export default {
  name: 'Cart',
  data () {
    return {
      selectAll: false
    }
  },
  components: {
    CartHeader,
    CartList,
    CartFooter,
    CommonFooter
  },
  methods: {
    handleSelectAll (flag) {
      this.selectAll = flag
      console.log(this.selectAll)
    }
  }
}
</script>

<style></style>
