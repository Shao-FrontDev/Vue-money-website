<template>
  <div class="output">
    <span>{{ output }}</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.output {
  position: relative;
  height: 72px;
  font-size: 36px;
  line-height: 72px;

  span {
    position: absolute;
    right: 18px;
  }
}
</style>
