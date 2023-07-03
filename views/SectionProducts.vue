<template>
  <v-section class="section-products" v-bind="sectionSettings">
    <block-product-list
      :list="productAdapter.getProducts(products)"
      :need-slider="dataSettings.needSlider"
      :loading="true"
    />
  </v-section>
</template>

<script setup>
import BlockProductList from '@/components/Products/BlockProductList.vue'

const props = defineProps({
  sectionSettings: {
    type: Object,
    default: () => ({})
  },
  dataSettings: {
    type: Object,
    default: () => ({})
  }
})

const root = useNuxtApp()
const { product: productService } = root.$services
const { product: productAdapter } = root.$adapters

const productsCode = ref(props.dataSettings.productsCode)

const { data: products, pending } = useAsyncData(`preview-products-${productsCode.value}`, () => {
  return productService.getProducts({ code: productsCode.value })
})

onMounted(async () => {
  if (products.value) {
    productService.setProducts(productsCode.value, products.value)
  }
})
</script>

<style lang="scss" scoped>
$white: $WHITE;

.section-products {
  border-top: 0.1rem solid rgba($white, 20%);

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  &:deep(.container) {
    max-width: 136.4rem;
    margin: 0;
  }
}
</style>
