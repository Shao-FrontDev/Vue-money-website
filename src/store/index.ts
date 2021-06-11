import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
const localStorageKeyName = "tagList";

interface ITag {
  content: string;
  id: string;
}

export default createStore({
  state: {
    tags:
      JSON.parse(window.localStorage.getItem(localStorageKeyName) as string) ||
      []
  },
  mutations: {
    createTag(state, name) {
      console.log("enter");

      if (name === null) return;
      if (name?.trim === "") {
        window.alert("标签名不能为空");
      } else {
        const isExist = (state.tags as Array<ITag>).findIndex(
          element => element.content === name
        );
        console.log(isExist);
        if (isExist !== -1) {
          alert("标签已经存在");
          return;
        } else {
          const tag = {
            content: name,
            id: uuidv4()
          };
          (state.tags as Array<ITag>).push(tag);
          console.log("end");
          window.localStorage.setItem(
            localStorageKeyName,
            JSON.stringify(state.tags)
          );
        }
      }
    },
    deleteTag(state, id) {
      console.log("deltetag");
      const newTags = (state.tags as Array<ITag>).filter(tag => tag.id !== id);
      state.tags = newTags;
      window.localStorage.setItem(
        localStorageKeyName,
        JSON.stringify(state.tags)
      );
    },
    updateTag(state, payload) {
      const filterTags = (state.tags as Array<ITag>).filter(
        tag => tag.id !== payload.id
      );
      const tag: ITag = { id: payload.id, content: payload.content };
      const newTags = [...filterTags, tag];
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(newTags));
    }
  },
  actions: {},
  modules: {},
  getters: {
    tagList(state) {
      return state.tags;
    }
  }
});
