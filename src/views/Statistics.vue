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
      const hashTable = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createAt.split("T");
        hashTable[date] = hashTable[date] || {
          title: date,
          items: [],
          input: null,
          outcome: null
        };
        hashTable[date].items.push(recordList[i]);
        hashTable[date].outcome += count(recordList[i], "-");
        hashTable[date].input += count(recordList[i], "+");
      }

      console.log(hashTable);

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
