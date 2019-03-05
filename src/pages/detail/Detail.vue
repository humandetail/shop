<template>
  <div class="detail-page">
    <detail-header></detail-header>
    <detail-image></detail-image>
    <product-info></product-info>
    <product-size></product-size>
    <user-address></user-address>
    <assessment></assessment>
    <qna></qna>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailHeader from './component/DetailHeader'
import DetailImage from './component/DetailImage'
import ProductInfo from './component/ProductInfo'
import ProductSize from './component/ProductSize'
import UserAddress from './component/UserAddress'
import Assessment from './component/Assessment'
import DetailFooter from './component/DetailFooter'
import Qna from './component/Qna'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailImage,
    ProductInfo,
    ProductSize,
    UserAddress,
    Assessment,
    Qna,
    DetailFooter
  }
}
</script>

<style></style>
