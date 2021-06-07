<template>
  <div class="numberPad">
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button @click="clear">清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPad"
};
</script>

<style lang="scss" scoped>
.numberPad {
  min-height: 256px;
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    button {
      border: none;
      height: 64px;
      background-color: cornflowerblue;
    }
    .ok {
      grid-column: 4 / 5;
      grid-row-start: 3;
      grid-row-end: 5;
      height: auto;
    }
    .zero {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>
