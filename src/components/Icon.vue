<template>
  <svg class="icon">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script lang="ts">
/* eslint-disable */
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {}
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.icon {
  height: 1em;
  width: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
