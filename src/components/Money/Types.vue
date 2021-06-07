<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  height: 64px;
  line-height: 64px;
  .selected {
    color: cornflowerblue;
  }
  > * {
    text-align: center;
    width: 50%;
  }
}
</style>
