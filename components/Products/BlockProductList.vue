<template>
  <component :is="needSlider && !loading ? 'v-slider' : 'div'" :need-slider="needSlider" class="circle-slider">
    <v-row tag="ul" :is-wrap="false" :class="{ 'slider swiper-wrapper': needSlider }">
      <template v-if="loading">
        <v-col v-for="(item, index) in 4" :key="index" :col="3" :md="4" :sm="2" :class="{ 'swiper-slide': needSlider }">
          <skeleton-product-item />
        </v-col>
      </template>
      <template v-else>
        <v-col v-for="item in list" :key="item.id" :col="3" :md="4" :sm="2" :class="{ 'swiper-slide': needSlider }">
          <block-product-item v-bind="item" />
        </v-col>
      </template>
    </v-row>
  </component>
</template>

<script setup>
import SkeletonProductItem from '@/components/Products/SkeletonProductItem.vue'
import BlockProductItem from '@/components/Products/BlockProductItem.vue'

defineProps({
  needSlider: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  list: { type: Array, default: () => [] }
})
</script>
