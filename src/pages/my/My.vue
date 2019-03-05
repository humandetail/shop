<template>
  <div class="my-page">
    <my-header></my-header>
    <my-event></my-event>
    <my-record></my-record>
    <other-section></other-section>
    <common-footer></common-footer>
  </div>
</template>

<script>
import MyHeader from './component/MyHeader'
import MyEvent from './component/MyEvent'
import MyRecord from './component/MyRecord'
import OtherSection from './component/OtherSection'
import CommonFooter from '@/components/Footer'
export default {
  name: 'My',
  components: {
    MyHeader,
    MyEvent,
    MyRecord,
    OtherSection,
    CommonFooter
  }
}
</script>

<style></style>
