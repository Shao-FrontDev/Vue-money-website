<template>
  <div class="nav-wrapper">
    <div class="content">
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
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  background: #e5e5e5;
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
