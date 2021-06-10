<template>
  <div class="tags">
    <ul class="tags__links">
      <li
        v-for="tag in dataSource"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        class="tags__links__link"
      >
        {{ tag.content }}
      </li>
    </ul>
    <div class="tags__create-button">
      <button @click="create">
        新增标签
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      selectedTags: []
    };
  },
  methods: {
    toggle(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit("update:selectedTags", this.selectedTags);
    },
    create() {
      const name = window.prompt("请输入标签名");
      if (name === "") {
        window.alert("标签名不能为空");
      } else if (this.dataSource) {
        const tag = {
          content: name,
          id: name
        };
        this.$emit("update:dataSource", [...this.dataSource, tag]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex: 1;
  background: #fff;
  &__links {
    display: flex;
    flex-wrap: wrap;
    &__link {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: ($h/2);
      padding: 0 8px;
      margin-right: 12px;
      margin-bottom: 12px;
      &.selected {
        background: #a5a5a5;
      }
    }
  }
  &__create-button {
    padding-top: 16px;
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
