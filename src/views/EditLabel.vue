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
      @change="handlerChange"
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
      tag: null,
      id: null,
      tags: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.tags = tagListModel.fetch();
    this.tag = this.tags.filter(t => t.id === this.id)[0];
    if (!this.tag) {
      this.$router.push("/404");
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "Labels" });
    },
    deleteTag() {
      tagListModel.delete(this.id);
      this.$router.push({ name: "Labels" });
    },
    handlerChange(e) {
      const filterTags = this.tags.filter(tag => tag.id !== this.id);
      const tag = { id: this.id, content: e.target.value };
      const newTags = [...filterTags, tag];
      tagListModel.save(newTags);
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
