import ListsContext from "./ListsContext";
import listsReducer from "./listsReducer";
import ListStorage from "../../model/listStorage";
import ListModel from "../../model/listModel";
import CardModel from "../../model/cardModel";

import { useReducer } from "react";

import * as types from "../types";

//initialize local storage
new ListStorage();
const initialState = ListStorage.fetchLists();

const ListsState = (props) => {
  const [state, dispatch] = useReducer(listsReducer, initialState);

  const deleteList = (id) => {
    dispatch({ type: types.DELETE_LIST, id });
  };

  const addList = (title) => {
    let list = new ListModel(title);
    dispatch({ type: types.ADD_LIST, list });
  };

  const addCard = ({ title, desc, listId }) => {
    let card = new CardModel(title, desc);
    dispatch({ type: types.ADD_CARD, payload: { card, listId } });
  };

  const deleteCard = ({ listId, cardId }) => {
    dispatch({ type: types.DELETE_CARD, payload: { listId, cardId } });
  };

  const includeCardFromOtherList = (listId, cardData) => {
    dispatch({
      type: types.INCLUDE_CARD_FROM_ANOTHER_LIST,
      payload: { listId, cardData },
    });
  };

  return (
    <ListsContext.Provider
      value={{
        lists: state,
        addList,
        deleteList,
        addCard,
        deleteCard,
        includeCardFromOtherList,
      }}
    >
      {props.children}
    </ListsContext.Provider>
  );
};

export default ListsState;
