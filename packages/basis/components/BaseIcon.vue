<template>
  <nuxt-icon class="icon-wrapper" data-testid="base-icon" :name="name" :filled="true" />
</template>

<script lang="ts" setup>
interface IBaseIcon {
  name: string
}

defineProps<IBaseIcon>()
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: flex;

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :deep(svg) {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: unset;
  }
}
</style>
