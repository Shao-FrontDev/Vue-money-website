import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
const localStorageKeyName = "tagList";

interface ITag {
  content: string;
  id: string;
}

export const store = createStore({
  state: {
    tags:
      JSON.parse(window.localStorage.getItem(localStorageKeyName) as string) ||
      [],
    isAnimation: false
  },
  mutations: {
    createTag(state, name) {
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
          store.commit("save", state.tags);
        }
      }
    },
    deleteTag(state, id) {
      console.log("deltetag");
      const newTags = (state.tags as Array<ITag>).filter(tag => tag.id !== id);
      state.tags = newTags;
      store.commit("save", state.tags);
    },
    updateTag(state, payload) {
      const filterTags = (state.tags as Array<ITag>).filter(
        tag => tag.id !== payload.id
      );
      const tag: ITag = { id: payload.id, content: payload.content };
      const newTags = [...filterTags, tag];
      console.log(newTags);
      state.tags = [...filterTags, tag];
      store.commit("save", state.tags);
    },
    toggleAnimation(state, payload) {
      state.isAnimation = payload;
    },
    save(state, data) {
      window.localStorage.setItem(localStorageKeyName, data);
    }
  },
  actions: {},
  modules: {},
  getters: {
    tagList(state) {
      return state.tags;
    },
    isAnimation(state) {
      return state.isAnimation;
    }
  }
});
