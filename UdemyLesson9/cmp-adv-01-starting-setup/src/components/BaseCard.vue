<template>
  <div>
    <header v-if="this.$slots.header">
      <!-- //$slot give access to the slots. we can check if we have elements in the
      slots, sow we can render it. Another way, not. Because it's unsemantik to
      have empty element on the page -->
      <slot name="header"></slot>
      <!-- //custom slot -->
    </header>
    <slot></slot>
    <!-- //default slot -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
