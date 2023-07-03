<template>
  <component :is="needSlider && !loading ? 'v-slider' : 'div'" :need-slider="needSlider" class="circle-slider">
    <VRow tag="ul" :is-wrap="false" :class="{ 'slider swiper-wrapper': needSlider }">
      <template v-if="loading">
        <VCol v-for="(item, index) in 4" :key="index" :col="3" :md="4" :sm="2" :class="{ 'swiper-slide': needSlider }">
          <SkeletonProductItem />
        </VCol>
      </template>

      <template v-else>
        <VCol v-for="item in list" :key="item.id" :col="3" :md="4" :sm="2" :class="{ 'swiper-slide': needSlider }">
          <BlockProductItem v-bind="item" />
        </VCol>
      </template>
    </VRow>
  </component>
</template>

<script setup lang="ts">
import SkeletonProductItem from '@/components/Products/SkeletonProductItem.vue'
import BlockProductItem from '@/components/Products/BlockProductItem.vue'

interface Props {
  needSlider?: boolean
  loading?: boolean
  list?: unknown[]
}

withDefaults(defineProps<Props>(), {
  list: () => [],
  loading: false,
  needSlider: true
})
</script>
