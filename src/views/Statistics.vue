<template>
  <Layout>
    <ol>
      <li v-for="(group, index) in result" :key="index" class="item-wrapper">
        <div>
          <header class="item-wrapper__header">
            <h3 class="">{{ beautify(group.title) }}</h3>
            <div>
              <span>出：{{ group.outcome }}</span>
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
import { clone } from "@/utlis/clone";
const count = (data, type) => {
  let number = 0;

  if (data.selectedType === type) {
    number += data.selectedAmount;
  }
  return number;
};
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
        hashTable[date].outcome += count(newList[i], "-");
        hashTable[date].input += count(newList[i], "+");
      }

      return hashTable;
    }
  },
  methods: {
    beautify(string) {
      const day = dayjs(string);
      const now = dayjs();

      if (day.isSame(now, "day")) {
        return "今天";
      } else if (day.isSame(now.subtract(1, "day"), "day")) {
        return "昨天";
      } else if (day.isSame(now.subtract(2, "day"), "day")) {
        return "前天";
      } else if (day.isSame(now, "year")) {
        return day.format("M月D日");
      }
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
    background-color: rgb(196, 196, 196);
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
