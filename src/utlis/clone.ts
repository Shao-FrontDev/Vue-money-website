interface RecordItem {
  selectedTags: Array<String>;
  selectedNotes: String;
  selectedType: "-" | "+";
  selectedAmount: Number;
  createAt?: any;
}

type CloneFunction = (data: RecordItem) => RecordItem;

export const clone: CloneFunction = data => {
  return JSON.parse(JSON.stringify(data));
};
