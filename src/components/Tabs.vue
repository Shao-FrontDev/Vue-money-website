<template>
  <div>
    <ul class="tabs">
      <li v-for="item in dataSource" :key="item.value"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    dataSource: Array,
    default: () => {
      return [];
    }
  }
};
</script>

<style></style>
