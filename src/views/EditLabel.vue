<template>
  <Layout>
    <div>{{ tag.content }}</div>
  </Layout>
</template>

<script>
import tagListModel from "@/models/tagListModel";

export default {
  data() {
    return {
      tag: null
    };
  },
  created() {
    const id = this.$route.params.id;
    const tags = tagListModel.fetch();
    this.tag = tags.filter(t => t.id === id)[0];
    console.log(this.tag);
    if (!this.tag) {
      this.$router.push("/404");
    }
  }
};
</script>

<style></style>
