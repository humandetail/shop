<template>
  <div>
    <div class="product-image" @click="handleGallayShow">
      <swiper :options="swiperOption" ref="bannerSwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="/static/images/goods/detail/detail_01.png" alt="product">
        </swiper-slide>
        <swiper-slide>
          <img src="/static/images/goods/detail/detail_01.png" alt="product">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <gallary @close="handleGallayClose" v-if="gallaryShow"></gallary>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Gallary from '@/components/gallary/Gallary'
export default {
  name: 'DetailImage',
  data () {
    return {
      gallaryShow: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: false
        },
        loop: true,
        autoplay: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Gallary
  },
  methods: {
    handleGallayShow () {
      this.gallaryShow = true
    },
    handleGallayClose () {
      this.gallaryShow = false
    }
  }
}
</script>

<style></style>
