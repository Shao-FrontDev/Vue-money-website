<template>
  <Layout>
    <Types @update:selectedType="onUpdateType" :type="record.selectedType" />
    <Tags
      @update:dataSource="updateData"
      :dataSource="tags"
      @update:selectedTags="onUpdateTags"
    />
    <Notes v-model:value="record.selectedNotes" />
    <NumberPad
      @update:selectedAmount="onUpdateAmount"
      @updateData="saveRecord"
    />
  </Layout>
</template>

<script>
import model from "./model";
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
      record: {
        selectedTags: [],
        selectedNotes: "",
        selectedType: "-",
        selectedAmount: 0
      },
      recordList: model.fetch()
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
      this.record.tags = tags;
    },

    onUpdateTags(tags) {
      this.record.selectedTags = tags;
    },

    onUpdateType(type) {
      this.record.selectedType = type;
    },
    onUpdateAmount(amount) {
      this.record.selectedAmount = parseFloat(amount);
      "selectedAmount", amount;
    },
    saveRecord() {
      const recordCopy = model.clone(this.record);
      this.recordList.push(recordCopy);
      this.record.selectedNotes = "";
    }
  },
  watch: {
    "recordList.length": {
      handler() {
        model.save(this.recordList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
</style>
