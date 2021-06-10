<template>
  <Layout>
    <div class="home">
      <h1 class="home__title">Today</h1>
      <div>
        <button class="home__button" @click="handlerAnimation">记一笔</button>
      </div>
    </div>
    <div class="record" :class="{ animation: isAnimation }"></div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      isAnimation: false
    };
  },
  methods: {
    handlerAnimation() {
      this.isAnimation = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/helper.scss";

.wrapper {
  height: 100vh;
  overflow: hidden;
}
.home {
  &__title {
    position: relative;
    text-align: center;
    font-weight: 900;
  }
  &__button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    background: $color-hightlight;
    border-radius: 16px;
    color: white;
    height: 50px;
    width: 100px;
  }
}

.record {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.5);
  transition: all 1s ease-in-out;
  transform: translateY(100%);
}
.record.animation {
  transform: translateY(0);
  transform: scale(1);
}
</style>
