<template>
  <div class="container" :class="{ 'container--full': isFull }">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  isFull?: boolean
}

withDefaults(defineProps<Props>(), {
  isFull: false
})
</script>

<style lang="scss" scoped>
$containerWidthDesktop: $CONTAINER_WIDTH_DESKTOP;

.container {
  width: 100%;
  height: inherit;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;

  &:not(&--full) {
    max-width: $containerWidthDesktop;
  }
}
</style>
