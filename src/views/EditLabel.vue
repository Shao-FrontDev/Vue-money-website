<template>
  <Layout>
    <div class="navbar">
      <Icon name="left" class="navbar__icon" @click="back" />
      <span class="navbar__title">编辑标签</span>
    </div>
    <FormItem
      filedName="标签名"
      placeholder="请输入标签名"
      :value="tag.content"
    />
    <div class="marigin-top">
      <Button @click="deleteTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script>
import tagListModel from "@/models/tagListModel";
import Icon from "@/components/Icon.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

export default {
  components: { Icon, FormItem, Button },
  data() {
    return {
      tag: null
    };
  },
  created() {
    const id = this.$route.params.id;
    const tags = tagListModel.fetch();
    this.tag = tags.filter(t => t.id === id)[0];
    if (!this.tag) {
      this.$router.push("/404");
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "Labels" });
    },
    deleteTag() {
      const id = this.$route.params.id;
      const tags = tagListModel.fetch();
      const newTags = tags.filter(tag => tag.id !== id);
      tagListModel.save(newTags);
      this.$router.push({ name: "Labels" });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #fff;
  margin-bottom: 8px;

  &__icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__title {
    font-size: 16px;
  }
}

input {
  height: 40px;
}
.marigin-top {
  margin-top: 44px;
  display: flex;
  justify-content: center;
}
</style>
