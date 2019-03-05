<template>
  <header class="header">
    <div class="nav" v-if="!fixedNavShow">
      <div class="scan-btn">
        <span class="iconfont icon-scan icon"></span>
      </div>
      <div class="search-fluid">
        <span class="iconfont icon-search icon"></span>
        <input type="search" class="search-keyword" placeholder="双十二感恩回馈">
      </div>
      <div class="msg-btn">
        <span class="iconfont icon-mail icon"></span>
      </div>
    </div>
    <div class="nav-fixed border-bottom" :style="opacityStyle" v-else>
      <div class="scan-btn">
        <span class="iconfont icon-scan icon"></span>
      </div>
      <div class="search-fluid">
        <span class="iconfont icon-search icon"></span>
        <input type="search" class="search-keyword" placeholder="双十二感恩回馈">
      </div>
      <div class="msg-btn">
        <span class="iconfont icon-mail icon"></span>
      </div>
    </div>
    <swiper :options="swiperOption" ref="bannerSwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="/static/images/slide_banner_01.jpg" alt="banner">
      </swiper-slide>
      <swiper-slide>
        <img src="/static/images/slide_banner_02.jpg" alt="banner">
      </swiper-slide>
      <swiper-slide>
        <img src="/static/images/slide_banner_03.jpg" alt="banner">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </header>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeHeader',
  data () {
    return {
      fixedNavShow: false,
      opacityStyle: {
        opacity: 0
      },
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top > 0) {
        let opacity = top / 50
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.fixedNavShow = true
      } else {
        this.fixedNavShow = false
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
