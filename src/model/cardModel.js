import uuid from "react-uuid";
class CardModel {
  constructor(title, desc) {
    this.id = uuid();
    this.timeStamp = Date.now();
    this.title = title;
    this.desc = desc;
  }
}

export default CardModel;
