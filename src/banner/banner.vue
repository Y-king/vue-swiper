<template lang="html">
    <div class="swiper-container" :style="{height:`${bannerHeight}px`}">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in mybanner'>
              <a :href="item.link">
                <img :src="`./src/assets/images/${item.imgname}`" :alt="item.title">
              </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import '../assets/css/swiper.min.css';
import Swiper from 'swiper';
export default {
  methods:{
    mySwiper(){
      var mySwiper = new Swiper('.swiper-container', {
      	autoplay: true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  },
  mounted(){
    this.mySwiper();
  },
  props:['mybanner','bannerHeight']
}
</script>
