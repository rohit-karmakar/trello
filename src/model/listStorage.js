class ListStorage {
  static addList(list) {
    let lists = ListStorage.fetchLists();
    lists.push(list);
    ListStorage.saveLists(lists);
  }

  static deleteList(id) {
    let lists = ListStorage.fetchLists();
    lists = lists.filter((list) => list.id !== id);
    ListStorage.saveLists(lists);
  }

  static fetchLists() {
    let lists = localStorage.getItem("lists");
    return JSON.parse(lists);
  }

  static saveLists(lists) {
    localStorage.removeItem("lists");
    localStorage.setItem("lists", JSON.stringify(lists));
  }

  constructor() {
    if (!localStorage.getItem("lists")) {
      localStorage.setItem("lists", JSON.stringify([]));
    }
  }
}
export default ListStorage;
