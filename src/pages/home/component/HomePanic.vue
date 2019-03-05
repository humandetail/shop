<template>
  <section class="panic">
    <h2>
      <div class="title">
        <span>限时</span>
        <em>抢购</em>
      </div>
      <div class="time-bar border">
        <span class="icon iconfont icon-clock"></span>
        <span class="time">
          <i class="hh">02</i>:<i class="mm">34</i>:<i class="ss">49</i>
        </span>
      </div>
    </h2>
    <swiper :options="swiperOption" ref="panicSwiper" class="panicSwiper">
      <!-- slides -->
      <swiper-slide>
        <router-link to="/detail" tag="img" src="https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/15721/14/7519/134892/5c6d1858E440871da/0f3f83cd52aba50b.jpg!q90.webp" alt="panic"></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/detail" tag="img" src="/static/images/goods/panic/panic_02.gif" alt="panic"></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/detail" tag="img" src="/static/images/goods/panic/panic_03.jpg" alt="panic"></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/detail" tag="img" src="/static/images/goods/panic/panic_04.jpg" alt="panic"></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/detail" tag="img" src="/static/images/goods/panic/panic_02.gif" alt="panic"></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/detail" tag="img" src="/static/images/goods/panic/panic_04.jpg" alt="panic"></router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomePanic',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 4,
        slidesPerGroup: 3,
        spaceBetween: 10
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style></style>
