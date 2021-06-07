<template>
  <div class="tags">
    <ul class="current">
      <li>衣服</li>
      <li>衣服</li>
      <li>衣服</li>
      <li>衣服</li>
    </ul>
    <div class="new">
      <button>
        新增标签
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tags"
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex: 1;
  > .current {
    display: flex;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: ($h/2);
      padding: 0 8px;
      margin-right: 12px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
