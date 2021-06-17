import { useContext, useState, useEffect } from "react";

import ListsContext from "../../context/listsContext/ListsContext";
import FormDisplayContext from "../../context/formDisplayContext/FormDisplayContext";
import "./form.css";

const Form = () => {
  const { formDisplayState, hideForm } = useContext(FormDisplayContext);
  const { addList, addCard } = useContext(ListsContext);

  /**Local state to the component */
  const [title, setTittle] = useState("");
  const [desc, setDesc] = useState("");
  const [errorState, setErrorState] = useState(false);

  const titleChangeHandler = (e) => {
    setTittle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const resetForm = () => {
    setTittle("");
    setDesc("");
    setErrorState(false);
    hideForm();
  };

  const saveDataHandler = (e) => {
    e.preventDefault();
    if (!title) {
      setErrorState(true);
    } else {
      if (formDisplayState.isCard) {
        if (!desc) {
          setErrorState(true);
        } else {
          addCard({ title, desc, listId: formDisplayState.ListId });
          resetForm();
        }
      } else {
        addList(title);
        resetForm();
      }
    }
  };

  if (formDisplayState.display) {
    return (
      <div className="form-container">
        <div className="backdrop" onClick={resetForm}></div>
        <div className="input-container">
          <form>
            <fieldset>
              <legend>Add {formDisplayState.isCard ? "Card" : "List"}</legend>
              {errorState ? (
                <div className="error-msg">
                  <p>Please fill data in all fields</p>
                </div>
              ) : (
                ""
              )}
              <div className="input-box">
                <label htmlFor="title">Title*</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={titleChangeHandler}
                ></input>
              </div>
              {formDisplayState.isCard ? (
                <div className="input-box">
                  <label htmlFor="desc">Desc*</label>
                  <textarea
                    id="desc"
                    onChange={descChangeHandler}
                    value={desc}
                  ></textarea>
                </div>
              ) : null}
              <div className="button-container">
                <button onClick={resetForm}>Cancel</button>
                <button onClick={saveDataHandler}>
                  Add {formDisplayState.isCard ? "Card" : "List"}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
  return null;
};

export default Form;
