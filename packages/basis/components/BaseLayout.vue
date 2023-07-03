<template>
  <div class="page">
    <header class="page-header">
      <slot name="page-header" />
    </header>
    <main class="page-wrapper">
      <slot name="page-content" />
    </main>
    <footer class="page-footer">
      <slot name="page-footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$navIndex: $zLayerNav;

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page-header {
  position: sticky;
  z-index: $navIndex;
  top: 0;
}

.page-wrapper {
  position: relative;
  flex: auto;
  background: inherit;
}
</style>
