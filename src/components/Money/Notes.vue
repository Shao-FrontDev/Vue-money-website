<template>
  <div class="wrapper">
    <label class="notes">
      <span class="name">备注</span>
      <input
        type="text"
        placeholder="在这里添加备注"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "update:value"
  },
  props: {
    value: String
  },
  emits: ["update:value"]
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;
}
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
