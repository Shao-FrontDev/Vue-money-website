<template>
  <div>
    <div class="output">
      <span>{{ output || 0 }}</span>
    </div>
    <div class="numberPad">
      <div class="numberPad__buttons">
        <button @click="inputContent" class="numberPad__buttons__item">
          1
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          2
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          3
        </button>
        <button @click="deleteNumber" class="numberPad__buttons__item">
          删除
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          4
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          5
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          6
        </button>
        <button @click="clear" class="numberPad__buttons__item">清空</button>
        <button @click="inputContent" class="numberPad__buttons__item">
          7
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          8
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          9
        </button>
        <button
          class="numberPad__buttons__item numberPad__buttons__item--ok"
          @click="updateData"
        >
          OK
        </button>
        <button
          class="numberPad__buttons__item  numberPad__buttons__item--zero"
          @click="inputContent"
        >
          0
        </button>
        <button @click="inputContent" class="numberPad__buttons__item">
          .
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPad",
  data() {
    return {
      output: "0"
    };
  },
  methods: {
    inputContent(event) {
      const button = event?.target;
      const input = button.textContent;

      //限制计算器输出的长度
      if (this.output.length === 16) return;
      //限制计算器的点个数,如果已经有一个点再输入点就不行了
      if (this.output.indexOf(".") >= 0 && input === ".") return;

      if (this.output === "0") {
        if ("0123456789".indexOf(input) >= 0) {
          this.output = input;
          this.$emit("update:selectedAmount", this.output);
        } else {
          this.output += input;
          this.$emit("update:selectedAmount", this.output);
        }
        return;
      }

      this.output += input;
      this.$emit("update:selectedAmount", this.output);
    },
    deleteNumber() {
      const result = this.output.substr(0, this.output.length - 1);
      this.output = result;
      if (result) {
        this.$emit("update:selectedAmount", this.output);
      } else {
        this.output = "0";
        this.$emit("update:selectedAmount", this.output);
      }
    },

    clear() {
      this.output = "0";
      this.$emit("update:selectedAmount", this.output);
    },
    updateData() {
      this.output = "0";
      this.$emit("updateData");
    }
  }
};
</script>

<style lang="scss" scoped>
.numberPad {
  min-height: 256px;
  &__buttons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    &__item {
      border: none;
      height: 64px;
      background-color: cornflowerblue;
      cursor: pointer;
      &--ok {
        grid-column: 4 / 5;
        grid-row-start: 3;
        grid-row-end: 5;
        height: auto;
      }
      &--zero {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
}

.output {
  height: 72px;
  font-size: 36px;
  line-height: 72px;
  padding: 0 18px;
  text-align: right;
  background: #fff;
}
</style>
