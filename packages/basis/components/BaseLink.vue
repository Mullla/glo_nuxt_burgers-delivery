<template>
  <a v-if="!isVueLink" :href="url" :target="target">
    <slot><span v-html="text" /></slot>
  </a>

  <NuxtLink v-else :to="mappedUrl" :append="append" :target="target">
    <slot><span :data-id="mappedUrl" v-html="text" /></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  },
  append: {
    type: Boolean,
    default: false
  }
})

const mappedUrl = computed(() =>
  props.url && (props.url.startsWith('/') || props.url.startsWith('#')) ? props.url : `/${props.url}`
)

const isVueLink = computed((): boolean => {
  return !!props.url && !props.url.startsWith('http')
})
</script>
