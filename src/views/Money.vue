<template>
  <Layout>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="tags">
      <ul class="current">
        <li>衣服</li>
        <li>衣服</li>
        <li>衣服</li>
        <li>衣服</li>
      </ul>
      <div class="new">
        <button>
          新增标签
        </button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里添加备注" />
      </label>
    </div>
    <div class="output">
      <span>{{ output }}</span>
    </div>
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
  </Layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      output: "200",
      active: false
    };
  },
  methods: {
    clear() {
      this.output = ``;
    },
    changeState() {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  flex: 1;
  > .current {
    display: flex;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: ($h/2);
      padding: 0 8px;
      margin-right: 12px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

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

.output {
  position: relative;
  height: 72px;
  font-size: 36px;
  line-height: 72px;

  span {
    position: absolute;
    right: 18px;
  }
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
