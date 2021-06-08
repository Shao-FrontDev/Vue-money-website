const localStorageKeyName = "recordList";
const model = {
  clone(data) {
    const recordCopy = JSON.parse(JSON.stringify(data));
    recordCopy.createAt = new Date();
    return recordCopy;
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || []);
  },
  save(data) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default model;
