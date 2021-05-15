<template>
  <Layout>
    <div class="tag">
      <ul>
        <li>
          衣
        </li>
        <li>
          衣
        </li>
        <li>
          衣
        </li>
        <li>
          衣
        </li>
      </ul>
      <div class="add">
        <span>新增</span>
      </div>
    </div>
    <div class="options">
      <span class="active">支出</span>
      <span>收入</span>
    </div>
    <div class="output">
      <span>{{ output }}</span>
    </div>
    <div class="numberPad">
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button @click="clear">清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button class="ok">OK</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>/</button>
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

<style lang="scss" scope>
ul {
  display: flex;
  padding: 1em;
}
li {
  border-radius: 8px;
  margin-right: 1em;
  background: rgb(201, 200, 200);
  padding: 0.25em 0.75em;
}
.options {
  /* background: olive; */
  display: flex;
  padding: 1em 0;
  justify-content: space-between;
  text-align: center;
}
.options span {
  display: block;
  flex: 1;
}

.active {
  padding-bottom: 0.5em;
  border-bottom: 2px solid black;
}

.tag {
  flex: 1;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
}

.output {
  padding: 1em;
  display: flex;
  flex-direction: row-reverse;
}

.buttons > button {
  width: 20%;
  border: none;
  padding: 0.75em;
  transition: all 0.5s ease-in;
}

.buttons > button:focus {
  outline: none;
  background: cadetblue;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
