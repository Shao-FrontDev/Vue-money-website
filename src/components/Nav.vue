<template>
  <div class="nav">
    <router-link to="tags" active-class="selected" class="item">
      <Icon class="icon" name="label" />
      <span>
        标签
      </span>
    </router-link>
    <router-link to="money" active-class="selected" class="item">
      <Icon class="icon" name="money" />
      <span>
        记一笔
      </span>
    </router-link>
    <router-link to="statistics" active-class="selected" class="item">
      <Icon class="icon" name="statistics" />
      <span>
        统计
      </span>
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
@import "~@/assets/styles/helper.scss";
.nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  > .item {
    padding: 2px 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-hightlight;
  }
}
</style>
