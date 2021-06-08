<template>
  <div class="wrapper">
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">
        支出
      </li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      type: "+" // '-' 表示支出 '+' 表示收入
    };
  },

  methods: {
    selectType(type: string) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.type = type;
      this.$emit("update:selectedType", type);
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  background: #e7e7e7;
}
.types {
  display: flex;
  height: 64px;
  line-height: 64px;
  .selected {
    color: cornflowerblue;
  }
  > li {
    cursor: pointer;
    text-align: center;
    width: 50%;
  }
}
</style>
