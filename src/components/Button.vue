<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: none;
  background: #e1306c;
  border-radius: 16px;
  color: white;
  height: 50px;
  width: 100px;
}
</style>
