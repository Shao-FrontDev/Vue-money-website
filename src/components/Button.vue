<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background-color: #767676;
  font-size: 18px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
}
</style>
