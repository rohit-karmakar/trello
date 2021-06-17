import uuid from "react-uuid";

class ListModel {
  constructor(title) {
    this.id = uuid();
    this.title = title;
    this.cards = [];
  }
}

export default ListModel;
