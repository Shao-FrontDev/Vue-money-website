<template>
  <div class="nav">
    <router-link to="tags">
      <svg>
        <use xlink:href="#label"></use>
      </svg>
      标签
    </router-link>
    <router-link to="money">记一笔</router-link>
    <router-link to="statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
let importAll = (
  requireContext: __WebpackModuleApi.RequireContext
) => requireContext.keys().forEach(requireContext);

try {
  importAll(
    require.context("../assets/icons", true, /\.svg$/)
  );
} catch (error) {
  console.log(error);
}

// import x from "@/assets/icons/label.svg";
// console.log(x);

export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
