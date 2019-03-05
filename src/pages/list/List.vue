<template>
  <div class="list-page">
    <list-header></list-header>
    <list-ctrl></list-ctrl>
    <list-content></list-content>
  </div>
</template>

<script>
import ListHeader from './component/ListHeader'
import ListCtrl from './component/ListCtrl'
import ListContent from './component/ListContent'
export default {
  name: 'List',
  components: {
    ListHeader,
    ListCtrl,
    ListContent
  }
}
</script>

<style></style>
