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
      @change="update"
    />
    <div class="marigin-top">
      <Button @click="deleteTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script>
import { mapMutations } from "vuex";
import Icon from "@/components/Icon.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

export default {
  components: { Icon, FormItem, Button },
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    ...mapMutations(["updateTag"]),
    back() {
      this.$router.push({ name: "Labels" });
    },
    deleteTag() {
      this.$store.commit("deleteTag", this.id);
      this.$router.push({ name: "Labels" });
    },
    update(e) {
      const tag = { id: this.id, content: e.target.value };
      this.updateTag(tag);
    }
  },
  computed: {
    tag() {
      const tag = this.$store.getters.tagList.filter(
        item => item.id === this.id
      )[0];
      return tag;
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
