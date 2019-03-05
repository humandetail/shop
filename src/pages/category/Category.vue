<template>
  <div class="category-page">
    <category-header></category-header>
    <category-aside></category-aside>
    <category-list></category-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CategoryHeader from './component/CategoryHeader'
import CategoryAside from './component/CategoryAside'
import CategoryList from './component/CategoryList'
import CommonFooter from '@/components/Footer'
export default {
  name: 'Category',
  components: {
    CategoryHeader,
    CategoryAside,
    CategoryList,
    CommonFooter
  }
}
</script>

<style></style>
