<template>
  <Layout>
    <ol>
      <li v-for="(group, index) in result" :key="index" class="item-wrapper">
        <div>
          <header class="item-wrapper__header">
            <h3 class="">{{ toBeautify(group.title) }}</h3>
            <div>
              <span class="item-wrapper__header__element"
                >出：{{ group.outcome }}</span
              >
              <span>入：{{ group.input }}</span>
            </div>
          </header>
          <ol>
            <li
              v-for="item in group.items"
              :key="item.id"
              class="item-wrapper__record"
            >
              <span>
                {{ item.selectedTags[0].content }}
              </span>
              <span> {{ item.selectedType }}{{ item.selectedAmount }} </span>
            </li>
          </ol>
        </div>
      </li>
    </ol>
  </Layout>
</template>

<script>
import dayjs from "dayjs";
import { clone } from "@/utility/tool";
import { calculate } from "@/utility/tool";
import { beautify } from "@/utility/tool";

export default {
  data() {
    return { recordList: {} };
  },
  components: {},
  created() {
    this.$store.commit("fetchRecords");
    this.recordList = this.$store.getters.recordList;
  },
  computed: {
    result() {
      const { recordList } = this;
      if (recordList.length === 0) {
        return [];
      }
      const hashTable = {};
      const newList = clone(
        recordList.sort(
          (a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
        )
      );
      for (let i = 0; i < newList.length; i++) {
        const [date, time] = newList[i].createAt.split("T");
        hashTable[date] = hashTable[date] || {
          title: date,
          items: [],
          input: 0,
          outcome: 0
        };
        hashTable[date].items.push(newList[i]);
        hashTable[date].outcome += calculate(newList[i], "-");
        hashTable[date].input += calculate(newList[i], "+");
      }

      return hashTable;
    }
  },
  methods: {
    toBeautify(value) {
      return beautify(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  display: block;
  margin: 10px;
  border-radius: 16px;
  &__header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    padding: 0 16px;
    background-color: #ffdc80;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    &__element {
      margin-right: 10px;
    }
  }
  &__record {
    padding: 10px 16px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(196, 196, 196);
  }
}
</style>
