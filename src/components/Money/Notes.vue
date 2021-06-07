<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" />
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notes {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  padding: 16px;
  span {
    margin-right: 12px;
  }

  input {
    border: none;
    outline: none;
    padding-left: 18px;
  }
}
</style>
