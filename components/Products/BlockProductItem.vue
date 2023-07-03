<template>
  <div class="product-card-item">
    <span v-if="count" class="count" v-text="count" />

    <RouterLink :to="url" class="image-wrapper">
      <div class="image-skeleton" />
      <img v-lazy-load :src="image.src" :alt="image.alt" class="image isImageLoading" />
    </RouterLink>

    <div class="info">
      <div class="info-header">
        <p class="title" v-text="title" />
        <span class="weight">Вес: {{ weight }}</span>
      </div>

      <p class="description" v-text="description" />

      <div class="info-bottom" :class="{ 'info-bottom--counted': Boolean(count) }">
        <button v-if="count" type="button" class="button" @click="count--">
          <VIcon name="minus" class="minus" />
        </button>

        <span class="price"> {{ count ? price * count : price }} ₽</span>
        <button v-if="count" type="button" class="button" @click="count++">
          <VIcon name="plus" class="plus" />
        </button>

        <button v-else type="button" class="button" @click="count++">
          <VIcon name="cart" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  id: number
  title: string
  weight: number
  price: number
  description: string
  url: string
  image: {
    src: string
    alt: string
  }
}

withDefaults(defineProps<Props>(), {
  id: -1,
  title: '',
  weight: 0,
  price: 0,
  description: '',
  url: '',
  image: () => ({
    src: '',
    alt: ''
  })
})

const count = ref(0)
</script>

<style lang="scss" scoped>
$green-gradient: $GREEN-GRADIENT;
$background-light: $BACKGROUND-LIGHT;
$white: $WHITE;
$gray: $GRAY;
$green-light: $GREEN-LIGHT;

.product-card-item {
  position: relative;
  z-index: 2;
  border-radius: 1rem;
  background: $background-light;

  @include hover {
    transition: all 0.3s ease;

    &:hover {
      z-index: 1;
      box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
      filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
    }
  }

  &:has(> .image-wrapper:focus) {
    z-index: 1;
    box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
    filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
  }

  .count {
    position: absolute;
    z-index: 3;
    top: -1rem;
    right: -1.5rem;
    display: flex;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $green-light;
    color: $white;
    font-family: 'Gilroy Bold';
    font-size: 2rem;
    line-height: 2.4rem;
  }

  .image {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 22.7rem;
    max-height: 22.7rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    object-fit: cover;

    &-wrapper {
      position: relative;

      &:has(> .image.isImageLoading) {
        .image-skeleton {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          min-height: 22.7rem;
          animation: pulse-bg 1s infinite;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
      }
    }
  }

  .title {
    color: $white;
    font-family: 'Gilroy Bold';
    @include adaptive-font(2.2, 2);

    @include tablet-desktop {
      line-height: 2.7rem;
    }

    @include mobile {
      line-height: 2.4rem;
    }
  }

  .weight {
    color: $white;
    font-family: Gilroy;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  .description {
    color: $gray;
    font-family: Gilroy;
    @include adaptive-font(1.3, 1.2);
    line-height: 1.7rem;
  }

  .price {
    color: $white;
    font-family: 'Gilroy Semibold';
    font-size: 2rem;
    line-height: 2.4rem;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 1rem 1.6rem 1rem 1.9rem;
    border: none;
    border-radius: 1rem;
    background: $green-gradient;
    color: $white;
    column-gap: 1.2rem;
    cursor: pointer;
    font-family: 'Gilroy SemiBold';
    font-size: 1.4rem;
    line-height: 1.7rem;

    @include hover {
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
      }
    }

    &:focus {
      box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    &:deep(svg) {
      @include tablet-desktop {
        width: 2.4rem;
        height: 2.4rem;
      }

      @include mobile {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    row-gap: 1.5rem;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--counted {
        .button {
          width: 6.2rem;
          height: 4.4rem;
          justify-content: center;
        }

        .plus {
          /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
          &:deep(svg) {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        .minus {
          /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
          &:deep(svg) {
            width: 1.8rem;
            height: 0.33rem;
          }
        }
      }
    }
  }
}
</style>
