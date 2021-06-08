<template>
  <Layout>
    <Types @update:selectedType="onUpdateType" />
    <Tags
      @update:dataSource="updateData"
      :dataSource="tags"
      @update:selectedTags="onUpdateTags"
    />
    <Notes v-model:value="selectedNotes" />
    <NumberPad @update:selectedAmount="onUpdateAmount" />
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
      tags: ["衣", "食", "住", "行", "其他"],
      selectedTags: [],
      selectedNotes: "",
      selectedType: "",
      selectedAmount: ""
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
    },
    onUpdateTags(tags) {
      this.selectedTags = tags;
    },

    onUpdateType(type) {
      console.log("selectedType", this.selectedNotes);
      this.selectedType = type;
    },
    onUpdateAmount(amount) {
      this.selectedAmount = amount;
      console.log("selectedAmount", amount);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
</style>
