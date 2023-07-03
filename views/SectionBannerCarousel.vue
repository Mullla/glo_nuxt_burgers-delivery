<template>
  <VSection is-full class="section-banner-carousel">
    <BlockBannerCarouselList :banners="banners" :loading="pending" />
  </VSection>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import BlockBannerCarouselList from '@/components/BannerCarousel/BlockBannerCarouselList.vue'

const root = useNuxtApp()
const { banner: bannerService } = root.$services

// const { data: banners, pending } = useAsyncData(() => {
//   return bannerService.getBanners()
// })
console.log(root)

const banners = ref([])
const pending = ref(true)

onBeforeMount(async () => {
  banners.value = await bannerService.getBanners()
  pending.value = false
})
</script>

<style lang="scss" scoped>
.section-banner-carousel {
  position: relative;
  padding: 0;
  overflow-x: hidden;
}
</style>
