<template>
  <div class="nav">
    <router-link to="tags" active-class="selected">
      <div class="nav-item">
        <Icon name="label" />
        <span>
          标签
        </span>
      </div>
    </router-link>
    <router-link to="money" active-class="selected">
      <div class="nav-item">
        <Icon name="money" />
        <span>
          记一笔
        </span>
      </div>
    </router-link>
    <router-link to="statistics" active-class="selected">
      <div class="nav-item">
        <Icon name="statistics" />
        <span>
          统计
        </span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
// /* eslint-disable */
// let importAll = (
//   requireContext: __WebpackModuleApi.RequireContext
// ) => requireContext.keys().forEach(requireContext);

// try {
//   importAll(
//     require.context("../assets/icons", true, /\.svg$/)
//   );
// } catch (error) {
//   console.log(error);
// }

// // import x from "@/assets/icons/label.svg";
// // console.log(x);
export default {
  name: "Nav",
  components: {}
};
</script>

<style lang="scss" scoped>
.selected {
  color: rgb(4, 110, 110);
}

.nav {
  box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
}
.nav a {
  flex-grow: 1;
  padding: 0.5em 0;
}
.nav-item {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
}
</style>
