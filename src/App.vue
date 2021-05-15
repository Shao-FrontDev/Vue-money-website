<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: white;
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

ul,
ol {
  list-style: none;
}
</style>
