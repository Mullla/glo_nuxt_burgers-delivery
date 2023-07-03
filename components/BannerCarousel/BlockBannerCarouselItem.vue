<template>
  <component :is="url ? 'VLink' : 'div'" :url="url" class="banner-carousel-wrapper image-wrapper">
    <div class="image-wrapper-skeleton" />
    <img v-lazy-load :src="image.src" :alt="image.alt" class="image isImageLoading" />
  </component>
</template>

<script setup lang="ts">
interface Props {
  image: {
    src: string
    alt: string
  }
  url?: string
}

withDefaults(defineProps<Props>(), {
  url: '',
  image: () => ({
    src: '',
    alt: ''
  })
})
</script>

<style lang="scss" scoped>
$white: $WHITE;

.banner-carousel-item {
  &.image-wrapper {
    position: relative;
    width: 100%;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &:has(> .image.isImageLoading) {
      .image-wrapper-skeleton {
        position: absolute;
        z-index: 2;
        width: 100%;
        animation: pulse-bg 1s infinite;

        @include tablet-desktop {
          height: 48.4rem;
        }

        @include mobile {
          height: 29.6rem;
        }
      }
    }
  }

  .image {
    display: flex;
    width: 100%;
    object-fit: cover;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &-skeleton {
      width: 100%;
      height: 100%;
      animation: pulse-bg 1s infinite;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }
    }
  }
}

.section-banner-carousel {
  position: relative;
  padding: 0;

  .pagination-list {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    display: flex;
    column-gap: 1rem;
    transform: translateX(-50%);

    &__item {
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid $white;
      border-radius: 50%;
      cursor: pointer;

      &:not(.active) {
        background-color: transparent;
      }

      @include hover {
        transition: background-color 0.3s ease;

        &:hover {
          background-color: rgba($white, 50%);
        }
      }

      &.active {
        background-color: $white;
      }
    }
  }

  .image {
    display: flex;
    width: 100%;
    object-fit: cover;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &-skeleton {
      width: 100%;
      animation: pulse-bg 1s infinite;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }
    }

    &-wrapper {
      position: relative;
      width: 100%;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }

      &:has(> .image.isImageLoading) {
        .image-wrapper-skeleton {
          position: absolute;
          z-index: 2;
          width: 100%;
          animation: pulse-bg 1s infinite;

          @include tablet-desktop {
            height: 48.4rem;
          }

          @include mobile {
            height: 29.6rem;
          }
        }
      }
    }
  }
}
</style>
