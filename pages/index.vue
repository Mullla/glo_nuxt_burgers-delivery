<template>
  <div>
    <SectionBannerCarousel v-bind="bannersData" />
    <SectionProducts v-bind="productsColdSnacksData" />
    <SectionProducts v-bind="productsHotSnacksData" />
    <SectionProducts v-bind="productsMeatSnacksData" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionBannerCarousel from '@/views/SectionBannerCarousel.vue'
import SectionProducts from '@/views/SectionProducts.vue'

const root = useNuxtApp()
const { products: productsEnum, banners: bannersEnum } = root.$configs.enums

const bannersData = ref({
  dataSettings: {
    needSlider: true,
    bannersArea: bannersEnum.main.code
  }
})

const productsColdSnacksData = ref({
  sectionSettings: {
    title: 'Холодные закуски'
  },
  dataSettings: {
    needSlider: true,
    bannersArea: productsEnum.cold.code
  }
})

const productsHotSnacksData = ref({
  sectionSettings: {
    title: 'Горячие закуски'
  },
  dataSettings: {
    needSlider: true,
    bannersArea: productsEnum.hot.code
  }
})

const productsMeatSnacksData = ref({
  sectionSettings: {
    title: 'Мясные блюда'
  },
  dataSettings: {
    needSlider: true,
    bannersArea: productsEnum.meat.code
  }
})
</script>
