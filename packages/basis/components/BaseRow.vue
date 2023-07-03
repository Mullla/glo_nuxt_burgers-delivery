<template>
  <component :is="tag" class="row" :class="rowModifer">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    aligment: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'baseline', 'stretch'].includes(value)
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    offsetCol: {
      type: String,
      default: 'default',
      validator(value) {
        return ['large', 'default', 'small'].includes(value)
      }
    },
    isColumn: {
      type: Boolean,
      default: false
    },
    isWrap: {
      type: Boolean,
      default: true
    },
    isNoGap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rowModifer() {
      let aligment = ''
      let justify = ''
      const isWrap = this.isWrap ? '' : 'no-wrap '
      const isColumn = this.isColumn ? 'flex-column ' : ''
      const isNoGap = this.isNoGap ? 'no-gap ' : ''
      const offsetCol = this.offsetCol === 'default' ? '' : `offset-${this.offsetCol}`
      switch (this.aligment) {
        case 'end':
          aligment = 'ai-fe '
          break
        case 'center':
          aligment = 'ai-c '
          break
        case 'baseline':
          aligment = 'ai-b '
          break
        case 'stretch':
          aligment = 'ai-s '
          break
        case 'start':
        default:
          aligment = ''
      }
      switch (this.justify) {
        case 'end':
          justify = 'jc-e '
          break
        case 'center':
          justify = 'jc-c '
          break
        case 'space-around':
          justify = 'jc-sa '
          break
        case 'space-between':
          justify = 'jc-sb '
          break
        case 'start':
        default:
          justify = ''
      }

      return `${isNoGap}${aligment}${justify}${isColumn}${isWrap}${offsetCol}`
    }
  }
}
</script>

<style lang="scss" scoped>
$colGapDesktopLarge: calc($COL_GAP_DESKTOP_LARGE / 2);
$colGapDesktop: calc($COL_GAP_DESKTOP / 2);
$colGapTablet: calc($COL_GAP_TABLET / 2);
$colGapMobile: calc($COL_GAP_MOBILE / 2);

.row {
  display: flex;
  flex-wrap: wrap;

  &.no-gap {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  &.flex-column {
    flex-direction: column;
  }

  &.no-wrap {
    flex-wrap: nowrap !important;
  }

  &.ai-c {
    align-items: center;
  }

  &.ai-s {
    align-items: stretch;
  }

  &.ai-b {
    align-items: baseline;
  }

  &.ai-fs {
    align-items: flex-start;
  }

  &.ai-fe {
    align-items: flex-end;
  }

  &.jc-sa {
    justify-content: space-around;
  }

  &.jc-sb {
    justify-content: space-between;
  }

  &.jc-c {
    justify-content: center;
  }

  &.jc-fe {
    justify-content: flex-end;
  }
}

@include desktop {
  .row {
    row-gap: 2rem;

    &.offset-large {
      margin-right: (-$colGapDesktopLarge);
      margin-left: (-$colGapDesktopLarge);
    }

    &:not(.offset-large) {
      margin-right: (-$colGapDesktop);
      margin-left: (-$colGapDesktop);
    }
  }
}

@include tablet {
  .row {
    margin-right: (-$colGapTablet);
    margin-left: (-$colGapTablet);
    row-gap: 2rem;
  }
}

@include mobile {
  .row {
    margin-right: (-$colGapMobile);
    margin-left: (-$colGapMobile);
    row-gap: 2rem;
  }
}
</style>
