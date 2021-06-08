<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon class="icon" name="right" />
      </li>
      <li>
        <span>衣</span>
        <Icon class="icon" name="right" />
      </li>
      <li>
        <span>衣</span>
        <Icon class="icon" name="right" />
      </li>
    </ol>
    <div class="btn-wrapper">
      <button class="btn">新建标签</button>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Tags",
  components: {}
};
</script>

<style lang="scss" scoped>
.tags {
  padding-left: 14px;
  background: rgb(255, 255, 255);
  font-size: 16px;

  > li {
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
