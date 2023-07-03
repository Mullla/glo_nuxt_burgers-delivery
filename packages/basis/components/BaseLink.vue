<template>
  <a v-if="!isVueLink" :href="url" :target="target">
    <slot><span v-html="text" /></slot>
  </a>
  <nuxt-link v-else :to="mappedUrl" :append="append" :target="target">
    <slot><span :data-id="mappedUrl" v-html="text" /></slot>
  </nuxt-link>
</template>

<script setup lang="ts">
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
