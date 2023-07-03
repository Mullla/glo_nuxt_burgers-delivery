<template>
  <VLayout>
    <template #page-header>
      <BlockHeader />
    </template>

    <template #page-content>
      <NuxtPage />
    </template>

    <template #page-footer>
      <BlockFooter />
    </template>
  </VLayout>
</template>

<script setup lang="ts">
import BlockHeader from '@/components/BlockHeader.vue'
import BlockFooter from '@/components/BlockFooter.vue'
</script>
