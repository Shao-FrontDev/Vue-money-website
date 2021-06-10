<template>
  <div class="form-item">
    <label class="form-item__notes">
      <span class="form-item__notes__title">{{ filedName }}</span>
      <input
        type="text"
        class="form-item__notes__input"
        :placeholder="placeholder"
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
    value: String,
    filedName: { type: String, required: true },
    placeholder: { type: String, defalut: "" }
  },
  emits: ["update:value"]
};
</script>

<style lang="scss" scoped>
.form-item {
  background: #fff;
  &__notes {
    height: 64px;
    line-height: 64px;
    font-size: 16px;
    padding: 16px;
    &__title {
      margin-right: 12px;
    }
    &__input {
      border: none;
      outline: none;
      padding-left: 18px;
    }
  }
}
</style>
