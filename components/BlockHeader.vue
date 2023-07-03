<template>
  <div class="header-wrapper">
    <button class="navigation-menu-button">
      <v-icon name="burger" />
    </button>
    <v-container class="header-container">
      <nav class="navigation">
        <ul class="navigation-list">
          <li class="navigation-list__item">
            <v-link url="/" :text="'Холодные закуски'" />
          </li>
          <li class="navigation-list__item">
            <v-link url="/" :text="'Горячие закуски'" />
          </li>
          <li class="navigation-list__item">
            <v-link url="/" :text="'Мясные блюда'" />
          </li>
        </ul>
      </nav>
      <v-link url="/cart" class="cart-button">
        Корзина <v-icon v-if="!cartItemsCount && isReady" name="cart" /><span
          v-if="cartItemsCount && isReady"
          class="count"
          >{{ cartItemsCount }}</span
        >
      </v-link>
    </v-container>
  </div>
</template>

<script setup>
const cartItemsCount = ref(1)

const isReady = ref(false)
onMounted(() => {
  isReady.value = true
})
</script>

<style lang="scss" scoped>
$black: $BLACK;
$white: $WHITE;
$green: $GREEN;
$background: $BACKGROUND;

.navigation-menu-button {
  @include tablet-desktop {
    display: none;
  }

  @include mobile {
    border: none;
    background: none;
    cursor: pointer;

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    &:deep(svg) {
      @include mobile {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}

.cart-button {
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1rem;
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
  color: $white;
  cursor: pointer;
  font-family: 'Gilroy SemiBold';
  @include adaptive-font(1.4, 1.2);

  &::after {
    position: absolute;
    display: block;
    background: rgba($white, 30%);
    content: '';
  }

  @include hover {
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
    }
  }

  &:focus {
    box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
  }

  @include tablet-desktop {
    padding: 1rem 1.5rem 1rem 2.4rem;
    column-gap: 3.2rem;
    line-height: 1.7rem;

    &::after {
      top: 50%;
      right: calc(1.5rem + 1.6rem + 3rem);
      width: 0.1rem;
      height: 60%;
      transform: translateY(-50%);
    }
  }

  @include mobile {
    flex-direction: column-reverse;
    padding: 0.5rem;
    line-height: 1.4rem;
    row-gap: 0.4rem;

    &::after {
      top: calc(0.5rem + 2.4rem + 0.4rem);
      width: 80%;
      height: 0.1rem;
      transform: translateY(-50%);
    }
  }

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  &:deep(svg) {
    @include tablet-desktop {
      width: 3rem;
      height: 3rem;
    }

    @include mobile {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  span.count {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $white;
    color: $black;

    @include tablet-desktop {
      width: 3rem;
      height: 3rem;
    }

    @include mobile {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}

.header-container {
  display: flex;
  align-items: center;

  @include tablet-desktop {
    justify-content: space-between;
  }

  @include mobile {
    justify-content: flex-end;
  }
}

.header-wrapper {
  background: $background;
  box-shadow: 0 0.5rem 0.5rem $background;
  @include tablet-desktop {
    padding: 0 4rem;
  }

  @include mobile {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;
  }

  .navigation {
    width: 90%;
    overflow-x: auto;

    @include mobile {
      display: none;
    }

    &::-webkit-scrollbar {
      height: 0;
    }

    &-list {
      position: relative;
      display: flex;
      // width: 90%;
      // overflow-x: auto;

      @include tablet-desktop {
        column-gap: 3rem;
      }

      @include mobile {
        column-gap: 1rem;
      }

      &__item {
        a {
          display: inline-block;
          border-bottom: 0.3rem solid transparent;
          color: $white;
          font-family: 'Gilroy Medium';
          white-space: nowrap;
          @include adaptive-font(1.8, 1.4);

          @include hover {
            transition: all 0.3s ease;

            &:hover {
              border-bottom: 0.3rem solid #618967;
            }
          }

          @include tablet-desktop {
            padding: 3rem 0;
            line-height: 2.1rem;
          }

          @include mobile {
            padding: 2rem 0;
            line-height: 1.6rem;
          }
        }
      }
    }
  }
}
</style>
