<template>
  <div class="gallary" id="gallary" @click="handleGallaryClose">
    <swiper :options="gallaryOption" ref="gallarySwiper">
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
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Gallary',
  data () {
    return {
      gallaryOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: false,
          observe: true,
          observeParents: true
        },
        loop: true,
        autoplay: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style></style>
