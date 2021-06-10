<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <FormItem filedName="标签名" placeholder="请输入标签名" />
  </Layout>
</template>

<script>
import tagListModel from "@/models/tagListModel";
import Icon from "@/components/Icon.vue";
import FormItem from "@/components/Money/FormItem.vue";

export default {
  components: { Icon, FormItem },
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
