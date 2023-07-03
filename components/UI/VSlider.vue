<template>
  <div :class="{ slider: needSlider }">
    <div ref="slider" :class="{ 'swiper-container': needSlider }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import Swiper, { SwiperOptions } from 'swiper'

interface Props {
  needSlider?: boolean
  activeIndex?: number
  sliderSettings?: SwiperOptions
}

const props = withDefaults(defineProps<Props>(), {
  needSlider: false,
  activeIndex: 0,
  sliderSettings: () => ({
    slidesPerView: 'auto',
    loop: false
  })
})

const emit = defineEmits(['slideChange'])

const slider = ref<HTMLElement>()
const swiper = ref<Swiper>()

onMounted(() => {
  if (props.needSlider) {
    swiper.value = new Swiper(slider.value as HTMLElement, props.sliderSettings)
    swiper.value.on('slideChange', () => swiper.value && emit('slideChange', swiper.value.realIndex))
  }
})

const activeIndex = computed(() => props.activeIndex)

watch(activeIndex, (value) => swiper.value && swiper.value.slideTo(value))
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
}

.swiper-container {
  overflow: unset !important;

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :deep(.swiper-wrapper) {
    position: static !important;
    z-index: unset !important;
    width: unset !important;
    height: unset !important;
    box-sizing: border-box !important;
    transition-property: unset !important;
  }
}
</style>
