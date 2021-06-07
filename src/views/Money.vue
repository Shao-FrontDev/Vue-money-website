<template>
  <Layout>
    <Options />
    <Tags />
    <Notes />
    <Output />
    <NumberPad />
  </Layout>
</template>

<script>
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Options from "@/components/Money/Options.vue";
import Output from "@/components/Money/Output.vue";
import Notes from "@/components/Money/Notes.vue";
export default {
  components: {
    NumberPad,
    Tags,
    Options,
    Output,
    Notes
  },
  data() {
    return {
      output: "200",
      active: false
    };
  },
  methods: {
    clear() {
      this.output = ``;
    },
    changeState() {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.notes {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  padding: 16px;
  span {
    margin-right: 12px;
  }

  input {
    border: none;
    outline: none;
    padding-left: 18px;
  }
}
</style>
