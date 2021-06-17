import * as types from "../types";
const FormDisplayReducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_ADD_LIST:
      return { ...state, display: true, isCard: false };
    case types.HIDE_FORM:
      return { ...state, display: false, isCard: false, ListId: null };
    case types.SHOW_ADD_CARD:
      return { ...state, display: true, isCard: true, ListId: action.listId };
    default:
      return state;
  }
};

export default FormDisplayReducer;
