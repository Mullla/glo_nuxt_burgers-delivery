<template>
  <section class="section" :class="{ 'section--full': isFull }">
    <VContainer :is-full="isFull">
      <div v-if="title || description" class="section-header">
        <h2 v-if="title" class="section__title" v-html="title" />
        <p v-if="description" class="section__description" v-html="description" />
      </div>
      <div class="seciton-content">
        <slot />
      </div>
    </VContainer>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  isFooter: {
    type: Boolean,
    default: false
  },
  isFull: {
    type: Boolean,
    default: false
  },
  isTitleLarge: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
$containerSideOffsetDesktop: $SECTION_SIDE_OFFSET_DESKTOP;
$containerSideOffsetMobile: $SECTION_SIDE_OFFSET_MOBILE;

$verticalOffsetMobile: $VERTICAL_OFFSET_MOBILE;
$verticalOffsetDesktop: $VERTICAL_OFFSET_DESKTOP;

$black: $BLACK;
$white: $WHITE;

.section {
  overflow: hidden;

  &:not(.section--full) {
    @include tablet-desktop {
      padding: $verticalOffsetDesktop $containerSideOffsetDesktop;
    }
    @include mobile {
      padding: $verticalOffsetMobile $containerSideOffsetMobile;
    }
  }

  &--full {
    @include tablet-desktop {
      padding: $verticalOffsetDesktop 0;
    }
    @include mobile {
      padding: $verticalOffsetMobile 0;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    @include tablet-desktop {
      row-gap: 5rem;
    }
    @include mobile {
      row-gap: 2.5rem;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    @include tablet-desktop {
      align-items: center;
      padding-left: 11rem;
      column-gap: 2rem;
    }
    @include mobile {
      flex-direction: column;
      row-gap: 1rem;
    }
  }

  &-footer {
    display: flex;
    justify-content: center;
  }

  &__title {
    position: relative;
    color: $white;
    font-family: 'Gilroy Bold';
    @include adaptive-font(3.2, 2);

    @include tablet-desktop {
      line-height: 3.9rem;
    }

    @include mobile {
      line-height: 2.4rem;
    }

    &::before {
      position: absolute;
      top: 0.3rem;
      left: -3rem;
      display: block;
      width: 0.4rem;
      height: 3.3rem;
      background: #618967;
      content: '';
    }
  }

  &__description {
    color: $black;
    font-family: 'Montserrat Light';
    @include adaptive-font(2.6, 1.6);

    @include tablet-desktop {
      width: 100%;
      max-width: 53rem;
      line-height: 3.2rem;
    }

    @include mobile {
      line-height: 2rem;
    }
  }
}

.is-debug .section {
  box-shadow: inset 0 0 0 1px rgba(0, 255, 255, 50%);
}
</style>
