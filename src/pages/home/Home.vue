<template>
  <div class="home-page">
    <home-header></home-header>
    <home-nav></home-nav>
    <home-notice></home-notice>
    <home-panic></home-panic>
    <home-advert></home-advert>
    <home-recommendation></home-recommendation>
    <home-boon></home-boon>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader'
import HomeNav from './component/HomeNav'
import HomeNotice from './component/HomeNotice'
import HomePanic from './component/HomePanic'
import HomeAdvert from './component/HomeAdvert'
import HomeRecommendation from './component/HomeRecommendation'
import HomeBoon from './component/HomeBoon'
import CommonFooter from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav,
    HomeNotice,
    HomePanic,
    HomeAdvert,
    HomeRecommendation,
    HomeBoon,
    CommonFooter
  }
}
</script>

<style></style>
