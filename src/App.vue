<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "~@/assets/styles/normalize.scss";
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
body {
  background: white;
  font-family: $font-hei;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
