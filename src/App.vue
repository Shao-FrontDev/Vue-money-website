<template>
  <div class="home">
    <router-view></router-view>
    <div class="navbar">
      <router-link to="tags">标签</router-link>
      <router-link to="money">记一笔</router-link>
      <router-link to="statistics">统计</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/test.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: $red;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  color: black;
  text-decoration: none;
}

a:active {
  background: none;
}

.navbar {
  display: flex;
  justify-content: space-evenly;
}

.navbar a {
  padding: 1em 0;
}

ul,
ol {
  list-style: none;
}
</style>
