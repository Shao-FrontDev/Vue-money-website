<template>
  <div class="wrapper">
    <!-- <button class="wrapper__button" @click="handlerAnimation">Close</button> -->
    <div v-if="$slots" @click="handlerAnimation">
      <slot @click="handlerAnimation"></slot>
    </div>
    <ul class="wrapper__types">
      <li
        :class="type === '-' && 'wrapper__types__link--selected'"
        @click="selectType('-')"
        class="wrapper__types__link"
      >
        支出
      </li>
      <li
        :class="type === '+' && 'wrapper__types__link--selected'"
        @click="selectType('+')"
        class="wrapper__types__link"
      >
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
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
    },
    ...mapMutations(["toggleAnimation"]),
    handlerAnimation() {
      this.toggleAnimation(false);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.wrapper {
  background: #e7e7e7;
  position: relative;
  &__button {
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    border: none;
    background: #d94c1a;
    border-radius: 16px;
    color: white;
    height: 50px;
    width: 100px;
  }
  &__types {
    display: flex;
    height: 64px;
    line-height: 64px;
    justify-content: center;
    .selected {
      color: cornflowerblue;
    }
    &__link {
      cursor: pointer;
      text-align: center;
      width: 15%;
      &--selected {
        color: $color-hightlight;
      }
    }
  }
}
</style>
