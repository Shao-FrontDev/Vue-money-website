import { v4 as uuidv4 } from "uuid";
const localStorageKeyName = "tagList";
const tagListModel = {
  data: [],
  fetch() {
    this.data =
      JSON.parse(window.localStorage.getItem(localStorageKeyName)) || [];

    return this.data;
  },
  save(data) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
  create(name) {
    if (name === null) return;
    if (name?.trim() === "") {
      window.alert("标签名不能为空");
    } else {
      const isExist = this.data.findIndex(element => element.content === name);
      if (isExist !== -1) {
        alert("标签已经存在");
        return;
      } else {
        const tag = {
          content: name,
          id: uuidv4()
        };
        this.data.push(tag);
        this.save(this.data);
      }
    }
  },
  delete(id) {
    const newData = this.data.filter(tag => tag.id !== id);
    this.save(newData);
  },
  update(id, content) {
    const filterData = this.data.filter(tag => tag.id !== id);
    const data = { id, content };
    const newData = [...filterData, data];
    this.save(newData);
  }
};

export default tagListModel;
