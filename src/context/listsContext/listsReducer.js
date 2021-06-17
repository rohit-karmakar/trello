import * as types from "../types";
import listStorage from "../../model/listStorage";

const listsReducer = (state, action) => {
  let lists;
  let index;
  let list;
  let cards;

  switch (action.type) {
    case types.ADD_LIST:
      lists = [...state, action.list];
      listStorage.saveLists(lists);
      return lists;

    case types.DELETE_LIST:
      lists = state.filter((list) => list.id !== action.id);
      listStorage.saveLists(lists);
      return lists;

    case types.ADD_CARD:
      lists = [...state];
      index = lists.findIndex((list) => list.id === action.payload.listId);
      list = lists[index];
      list = { ...list, cards: [...list.cards, action.payload.card] };
      lists[index] = list;
      listStorage.saveLists(lists);
      return lists;

    case types.DELETE_CARD:
      lists = [...state];
      index = lists.findIndex((list) => list.id === action.payload.listId);
      list = lists[index];
      cards = list.cards.filter((card) => card.id !== action.payload.cardId);
      list = { ...list, cards: [...cards] };
      lists[index] = list;
      listStorage.saveLists(lists);
      return lists;

    case types.INCLUDE_CARD_FROM_ANOTHER_LIST:
      lists = [...state];
      index = lists.findIndex((list) => list.id === action.payload.listId);
      list = lists[index];
      list = { ...list, cards: [...list.cards, action.payload.cardData] };
      lists[index] = list;
      listStorage.saveLists(lists);
      return lists;
    default:
      return state;
  }
};

export default listsReducer;
