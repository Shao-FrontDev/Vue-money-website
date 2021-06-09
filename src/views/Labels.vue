<template>
  <Layout>
    <ol class="tags">
      <router-link
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
        class="tag"
      >
        <span>{{ tag.content }}</span>
        <Icon class="icon" name="right" />
      </router-link>
    </ol>
    <div class="btn-wrapper">
      <button class="btn" @click="create">新建标签</button>
    </div>
  </Layout>
</template>

<script>
import tagListModel from "@/models/tagListModel";

export default {
  name: "Tags",
  data() {
    return {
      tags: []
    };
  },
  components: {},
  created() {
    const tagsData = tagListModel.fetch();
    this.tags = tagsData;
  },
  methods: {
    create() {
      const name = window.prompt("请输入标签名");
      if (name === "") {
        window.alert("标签名不能为空");
      } else {
        if (this.tags.includes(name)) {
          alert("标签已经存在");
          return;
        } else {
          const tag = {
            content: name,
            id: name
          };
          this.tags.push(tag);
          tagListModel.save(this.tags);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  padding-left: 14px;
  background: rgb(255, 255, 255);
  font-size: 16px;

  > .tag {
    display: flex;
    padding: 10px 8px 10px 0px;
    box-shadow: inset 0px -0.5px 0px #bcbbc1;
    align-items: center;
    .icon {
      margin-left: auto;
      height: 24px;
      width: 24px;
    }
  }
}

.btn-wrapper {
  margin-top: 44px;
  display: flex;
  justify-content: center;
  .btn {
    border: none;
    background-color: #767676;
    font-size: 18px;
    padding: 8px 16px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
