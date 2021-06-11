<template>
  <Layout>
    {{ record }}
    <Types @update:selectedType="onUpdateType" :type="record.selectedType" />
    <Tags
      @update:dataSource="updateData"
      :dataSource="tags"
      @update:selectedTags="onUpdateTags"
    />
    <FormItem
      v-model:value="record.selectedNotes"
      filedName="备注"
      placeholder="在这里输入备注"
    />
    <NumberPad
      @update:selectedAmount="onUpdateAmount"
      @updateData="saveRecord"
    />
  </Layout>
</template>

<script>
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";

export default {
  components: {
    NumberPad,
    Tags,
    Types,
    FormItem
  },
  data() {
    return {
      output: "200",
      active: false,
      tags: null,
      record: {
        selectedTags: [],
        selectedNotes: "",
        selectedType: "-",
        selectedAmount: 0
      },
      recordList: null
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
      this.record.selectedNotes = "";
    }
  },
  watch: {
    "recordList.length": {
      handler() {
        console.log("repro");
      }
    },
    "tags.length": {
      handler() {
        console.log("repro");
      }
    }
  },
  created() {
    console.log("repro");
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
</style>
