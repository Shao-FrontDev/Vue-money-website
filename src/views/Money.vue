<template>
  <Layout>
    <Types />
    <Tags @update:dataSource="updateData" :dataSource="tags" />
    <Notes />
    <NumberPad />
  </Layout>
</template>

<script>
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
export default {
  components: {
    NumberPad,
    Tags,
    Types,
    Notes
  },
  data() {
    return {
      output: "200",
      active: false,
      tags: ["衣", "食", "住", "行", "其他"]
    };
  },
  methods: {
    clear() {
      this.output = ``;
    },
    changeState() {
      this.active = !this.active;
    },
    updateData(tags) {
      this.tags = tags;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
</style>
