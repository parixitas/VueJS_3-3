<script setup>
</script>

<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in $store.state.cards" :key="item">{{ item }}</swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cards'

import "../assets/scroll.css"


// import required modules
import { EffectCards } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [EffectCards]
        }
    }
}
</script>