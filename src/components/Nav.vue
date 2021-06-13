<template>
  <div class="nav">
    <router-link
      to="/labels"
      active-class="nav__item--selected"
      class="nav__item"
    >
      <Icon class="nav__item__icon" name="label" />
      <span>
        标签
      </span>
    </router-link>
    <router-link
      to="/home"
      active-class="nav__item--selected"
      class="nav__item"
    >
      <Icon class="nav__item__icon" name="money" />
      <span>
        记一笔
      </span>
    </router-link>
    <router-link
      to="/statistics"
      active-class="nav__item--selected"
      class="nav__item"
    >
      <Icon class="nav__item__icon" name="statistics" />
      <span>
        统计
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  font-size: 12px;
  &__item {
    padding: 2px 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &--selected {
      color: $color-hightlight;
    }
    &__icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
