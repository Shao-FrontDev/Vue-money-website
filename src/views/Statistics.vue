<template>
  <Layout> </Layout>
</template>

<script>
export default {
  data() {
    return { recordList: null };
  },
  components: {},
  created() {
    this.$store.commit("fetchRecords");
    this.recordList = this.$store.getters.recordList;
    console.log(this.recordList);
  }
};
</script>

<style></style>
