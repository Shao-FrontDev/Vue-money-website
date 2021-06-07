<template>
  <div>
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

<script>
export default {
  data() {
    return {
      type: "+" // '-' 表示支出 '+' 表示收入
    };
  },
  methods: {
    selectType(type) {
      console.log("click");
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.type = type;
    }
  }
};
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
