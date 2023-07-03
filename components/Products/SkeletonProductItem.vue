<template>
  <div class="product-card-item">
    <div class="image" />
    <div class="info">
      <div class="info-header">
        <p class="title" />
        <span class="weight" />
      </div>
      <div class="description" />
      <div class="description" />
      <div class="info-bottom">
        <span class="price" />
        <div class="button" />
      </div>
    </div>
  </div>
</template>

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
  cursor: pointer;

  @include hover {
    transition: all 0.3s ease;

    &:hover {
      z-index: 1;
      box-shadow: 0 3rem 4.5rem rgba(43, 40, 40, 60%);
      filter: drop-shadow(0 3rem 4.5rem rgba(43, 40, 40, 60%));
    }
  }

  .image {
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 22.7rem;
    max-height: 22.7rem;
    animation: pulse-bg 1s infinite;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .title {
    width: 40%;
    border-radius: 1rem;
    animation: pulse-bg 1s infinite;

    @include tablet-desktop {
      height: 2.7rem;
    }

    @include mobile {
      height: 2.4rem;
    }
  }

  .weight {
    width: 40%;
    height: 1.4rem;
    border-radius: 1rem;
    animation: pulse-bg 1s infinite;
  }

  .description {
    height: 1.7rem;
    border-radius: 1rem;
    animation: pulse-bg 1s infinite;
  }

  .price {
    width: 33%;
    height: 2.4rem;
    border-radius: 1rem;
    animation: pulse-bg 1s infinite;
  }

  .button {
    width: 33%;
    height: 2.4rem;
    border-radius: 1rem;
    animation: pulse-bg 1s infinite;

    @include tablet-desktop {
      max-width: 13.7rem;
      max-height: 4.4rem;
    }

    @include mobile {
      max-width: 12.8rem;
      max-height: 4.1rem;
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
    }
  }
}
</style>
