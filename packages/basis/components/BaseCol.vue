<template>
  <component :is="tag" class="col" :class="colModifer">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

type ColProps = {
  tag?: string
  col?: number | string
  lg?: number | string
  md?: number | string
  sm?: number | string
  isNoGrow?: boolean
  aligment?: string
}

const colVaidator = (value: string): boolean => {
  return typeof value === 'number' ? true : ['hide', 'auto'].includes(value)
}

export default defineComponent({
  name: 'Col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    col: {
      type: [Number, String],
      default: 'auto',
      validator: colVaidator
    },
    lg: {
      type: [Number, String],
      default: null,
      validator: colVaidator
    },
    md: {
      type: [Number, String],
      default: null,
      validator: colVaidator
    },
    sm: {
      type: [Number, String],
      default: null,
      validator: colVaidator
    },
    isNoGrow: {
      type: Boolean,
      default: false
    },
    aligment: {
      type: String,
      default: 'start',
      validator(value: string): boolean {
        return ['start', 'end', 'center', 'baseline', 'stretch'].includes(value)
      }
    }
  },
  setup(props: ColProps) {
    const colModifer: ComputedRef<string> = computed((): string => {
      let aligment = ''
      switch (props.aligment) {
        case 'end':
          aligment = 'as-fe '
          break
        case 'center':
          aligment = 'as-c '
          break
        case 'baseline':
          aligment = 'as-b '
          break
        case 'stretch':
          aligment = 'as-s '
          break
        case 'start':
        default:
          aligment = ''
      }
      const colsLg = props.lg ? `col-lg-${props.lg} ` : ''
      const colsMd = props.md ? `col-md-${props.md} ` : ''
      const colsSm = props.sm ? `col-sm-${props.sm} ` : ''
      const cols = props.lg && props.md && props.sm ? '' : `col-${props.col} `
      const isNoGrow = props.isNoGrow ? 'no-grow ' : ''
      return `${cols}${colsLg}${colsMd}${colsSm}${aligment}${isNoGrow}`
    })

    return {
      colModifer
    }
  }
})
</script>

<style lang="scss" scoped>
$colCountDesktop: $COL_COUNT_DESKTOP;
$colCountTablet: $COL_COUNT_TABLET;
$colCountMobile: $COL_COUNT_MOBILE;
$colGapDesktopLarge: calc($COL_GAP_DESKTOP_LARGE / 2);
$colGapDesktop: calc($COL_GAP_DESKTOP / 2);
$colGapTablet: calc($COL_GAP_TABLET / 2);
$colGapMobile: calc($COL_GAP_MOBILE / 2);

.col {
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  @for $colNum from 1 through $colCountDesktop {
    &.col-#{$colNum} {
      position: relative;
      max-width: calc($colNum / $colCountDesktop) * 100%;
      min-height: 1px;
      flex: 0 0 calc($colNum / $colCountDesktop) * 100%;
    }
  }

  &.col-auto {
    width: auto;
    max-width: none;
    flex: 1 1 calc(100% / $colCountDesktop);
  }

  &.no-grow {
    flex-grow: 0 !important;
  }

  &.as-c {
    align-self: center;
  }

  &.as-s {
    align-self: stretch;
  }

  &.as-b {
    align-self: baseline;
  }

  &.as-fs {
    align-self: flex-start;
  }

  &.as-fe {
    align-self: flex-end;
  }

  .no-gap & {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}

@include mobile {
  :not(.offset-large),
  :not(.offset-small) {
    .col {
      padding-right: $colGapDesktop;
      padding-left: $colGapDesktop;
    }
  }

  .col {
    .offset-small & {
      padding-right: 0.8rem;
      padding-left: 0.8rem;
    }

    @for $colNum from 1 through $colCountMobile {
      &.col-sm-#{$colNum} {
        max-width: floor(calc($colNum / $colCountMobile) * 100%);
        flex: 0 0 floor(calc($colNum / $colCountMobile) * 100%);
      }
    }

    &-sm-hide {
      display: none;
    }
  }
}

@include tablet {
  .col {
    padding-right: $colGapTablet;
    padding-left: $colGapTablet;
    @for $colNum from 1 through $colCountTablet {
      &.col-md-#{$colNum} {
        max-width: floor(calc($colNum / $colCountTablet) * 100%);
        flex: 0 0 floor(calc($colNum / $colCountTablet) * 100%);
      }
    }

    &-lg-hide {
      display: none;
    }
  }
}

@include desktop {
  :not(.offset-large),
  :not(.offset-small) {
    .col {
      padding-right: $colGapDesktop;
      padding-left: $colGapDesktop;
    }
  }

  .col {
    .offset-large & {
      padding-right: $colGapDesktopLarge;
      padding-left: $colGapDesktopLarge;
    }

    @for $colNum from 1 through $colCountDesktop {
      &.col-lg-#{$colNum} {
        max-width: floor(calc($colNum / $colCountDesktop) * 100%);
        flex: 0 0 floor(calc($colNum / $colCountDesktop) * 100%);
      }
    }

    &-lg-hide {
      display: none;
    }
  }
}
</style>
