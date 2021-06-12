import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { clone } from "@/utlis/clone";

const localStorageTagsKeyName = "tagList";
const localStorageRecordsKeyName = "recordList";

interface TagItem {
  content: string;
  id: string;
}

interface RecordItem {
  selectedTags: Array<String>;
  selectedNotes: String;
  selectedType: "-" | "+";
  selectedAmount: Number;
  createAt?: String;
}

export const store = createStore({
  state: {
    tagList: [] as TagItem[],
    isAnimation: false,
    recordList: [] as RecordItem[]
  },
  mutations: {
    createTag(state, name) {
      if (name === null) return;
      if (name?.trim === "") {
        window.alert("标签名不能为空");
      } else {
        const isExist = (state.tagList as Array<TagItem>).findIndex(
          element => element.content === name
        );
        if (isExist !== -1) {
          alert("标签已经存在");
          return;
        } else {
          const tag = {
            content: name,
            id: uuidv4()
          };
          (state.tagList as Array<TagItem>).push(tag);
          store.commit("saveTag", state.tagList);
        }
      }
    },
    fetchTags(state) {
      state.tagList =
        JSON.parse(
          window.localStorage.getItem(localStorageTagsKeyName) as string
        ) || [];
    },
    deleteTag(state, id) {
      const newtagList = (state.tagList as Array<TagItem>).filter(
        tag => tag.id !== id
      );
      state.tagList = newtagList;
      store.commit("saveTag", state.tagList);
    },
    updateTag(state, payload) {
      const filtertagList = (state.tagList as Array<TagItem>).filter(
        tag => tag.id !== payload.id
      );
      const tag: TagItem = { id: payload.id, content: payload.content };
      const newtagList = [...filtertagList, tag];
      console.log(newtagList);
      state.tagList = [...filtertagList, tag];
      store.commit("saveTag", state.tagList);
    },
    saveTag(state, data) {
      window.localStorage.setItem(
        localStorageTagsKeyName,
        JSON.stringify(data)
      );
    },
    toggleAnimation(state, payload) {
      state.isAnimation = payload;
    },
    fetchRecords(state) {
      state.recordList =
        JSON.parse(
          window.localStorage.getItem(localStorageRecordsKeyName) as string
        ) || [];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit("saveRecords");
    },
    saveRecords(state) {
      window.localStorage.setItem(
        localStorageRecordsKeyName,
        JSON.stringify(state.recordList)
      );
    }
  },
  actions: {},
  modules: {},
  getters: {
    tagList(state) {
      return state.tagList;
    },
    isAnimation(state) {
      return state.isAnimation;
    },
    recordList(state) {
      return state.recordList;
    }
  }
});
