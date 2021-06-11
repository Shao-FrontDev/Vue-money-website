<template>
  <div class="home">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isRouterAlive: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
      console.log("run reload");
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/normalize.scss";
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";
body {
  background: white;
  font-family: $font-hei;
  height: 100vh;
  overflow: hidden;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
