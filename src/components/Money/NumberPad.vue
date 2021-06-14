<template>
  <div>
    <div class="output">
      <span>{{ output }}</span>
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
      const input = event.target.innerText;

      if (input.length >= 16) return;
      if (this.output.includes(".") && input === ".") return;
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
      this.$emit("updateData");
      this.output = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.numberPad {
  min-height: 256px;
  &__buttons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    background-color: #ffdc80;
    &__item {
      outline: none;
      border: none;
      height: 64px;
      background-color: $number-item;
      color: white;
      cursor: pointer;
      margin: 5px;
      border-radius: 6px;
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
  background: #ffdc80;
  color: #333333;
}
</style>
