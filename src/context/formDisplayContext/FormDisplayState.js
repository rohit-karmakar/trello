import FormDisplayContext from "./FormDisplayContext";
import formDisplayReducer from "./formDisplayReducer";
import * as types from "../types";

import { useReducer } from "react";

const initialState = { display: false, isCard: false, ListId: null };

const FormDisplayState = (props) => {
  const [state, dispatch] = useReducer(formDisplayReducer, initialState);

  const hideForm = () => {
    dispatch({ type: types.HIDE_FORM });
  };

  const toggleAddListForm = () => {
    if (state.display) {
      hideForm();
    } else {
      dispatch({ type: types.SHOW_ADD_LIST });
    }
  };

  const toggleAddCard = (listId) => {
    if (state.display) {
      hideForm();
    } else {
      dispatch({ type: types.SHOW_ADD_CARD, listId });
    }
  };

  return (
    <FormDisplayContext.Provider
      value={{
        formDisplayState: state,
        toggleAddListForm,
        hideForm,
        toggleAddCard,
      }}
    >
      {props.children}
    </FormDisplayContext.Provider>
  );
};

export default FormDisplayState;
