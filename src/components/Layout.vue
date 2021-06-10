<template>
  <div class="nav-wrapper">
    <div class="nav-wrapper__content">
      <slot></slot>
    </div>

    <Nav />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    background: #e5e5e5;
  }
}
</style>
