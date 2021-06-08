const localStorageKeyName = "tagList";
const tagListModel = {
  fetch() {
    const result = JSON.parse(
      window.localStorage.getItem(localStorageKeyName)
    ) || ["Hello world"];

    return result;
  },
  save(data) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default tagListModel;
