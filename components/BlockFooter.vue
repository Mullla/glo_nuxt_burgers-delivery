<template>
  <div class="footer">
    <v-container>
      <div class="footer-wrapper">
        <div class="footer-info">
          <p class="footer__logotype">LOGOS</p>
          <p class="footer__copyright">
            © ООО «ЛОГОС»<br />Все права защищены. <time datetime="2010">2010</time>-<time datetime="2023">2023</time>
          </p>
          <ul class="footer-info-links">
            <li class="footer-info-links__link"><a href="/">Пользовательское соглашение</a></li>
            <li class="footer-info-links__link"><a href="/">Карта сайта</a></li>
            <li class="footer-info-links__link"><a href="/">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <nav class="footer-navigation">
          <ul class="footer-navigation-list">
            <li class="footer-navigation-list__item"><a href="/">О ресторане</a></li>
            <li class="footer-navigation-list__item"><a href="/">Условия доставки</a></li>
            <li class="footer-navigation-list__item"><a href="/">Возврат товара</a></li>
            <li class="footer-navigation-list__item"><a href="/">Акции</a></li>
          </ul>
        </nav>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$green: $GREEN;
$gray: $GRAY;
$footer-background-gradient: $FOOTER-BACKGROUND-GRADIENT;

.footer {
  padding: 3rem 4rem 5rem;
  background: $footer-background-gradient;

  @include mobile {
    text-align: center;
  }

  &-wrapper {
    @include desktop {
      column-gap: 9rem;
    }

    @include tablet-desktop {
      display: flex;
      align-items: center;
    }

    @include tablet {
      justify-content: space-between;
      column-gap: 3rem;
    }
  }

  &-navigation {
    @include tablet-desktop {
      &-list {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;
        row-gap: 1rem;

        &__item {
          a {
            color: $white;
            font-family: 'Gilroy Medium';
            font-size: 2rem;
            text-decoration: underline;
            text-decoration-color: transparent;
            text-underline-offset: 0.7rem;

            @include hover {
              transition: all 0.3s ease;

              &:hover {
                text-decoration-color: $green;
              }
            }

            &:focus {
              text-decoration-color: $green;
              transition: all 0.3s ease;
            }
          }
        }
      }
    }
    @include mobile {
      display: none;
    }
  }

  &__logotype {
    color: $gray;
    font-family: 'Gilroy Bold';
    font-size: 2.4rem;
  }

  &__copyright {
    margin-top: 2rem;
    color: $gray;
    font-family: 'Gilroy Medium';
    font-size: 1.2rem;
  }

  &-info {
    min-width: 32rem;

    &-links {
      display: flex;
      flex-direction: column;
      margin-top: 0.7rem;
      row-gap: 1rem;

      &__link {
        a {
          color: $white;
          text-decoration: underline;
          text-underline-offset: 0.5rem;

          @include hover {
            transition: all 0.3s ease;

            &:hover {
              text-decoration-color: $green;
            }
          }

          &:focus {
            text-decoration-color: $green;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
}
</style>
