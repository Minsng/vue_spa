<template>  
  <div id="app">
    <div class="box">
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="../assets/visual01.png">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/visual02.png">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/visual03.png">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>    
</template>
<style>

.box{
  padding-top: 91px;
  height: 800px;
}
.swiper {
  height: 100%;
  width: 100%;
}
.box .swiper img {width: 100%;}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
.swiper .swiper-slide:nth-of-type(1) {background: url(../assets/visual01.png);}
.swiper-button-prev {transform: scale(1.3);left: 40px;}
.swiper-button-next {transform: scale(1.3);right: 40px;}
.swiper-pagination-bullet {transform: scale(2.5);}
.swiper-container-horizontal > .swiper-pagination-bullets {bottom: 30px;}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {margin: 0 20px;}
:root {--swiper-theme-color: #017eb9}
:root {--swiper-theme-color: #20407b}
</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'App',
  components: {
      Swiper,
      SwiperSlide
  },
   data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>