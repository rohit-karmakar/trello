import "./playGround.css";
import List from "../../component/list/List";
import { useContext } from "react";
import ListsContext from "../../context/listsContext/ListsContext";
import FormDisplayContext from "../../context/formDisplayContext/FormDisplayContext";

const PlayGround = () => {
  const { lists } = useContext(ListsContext);
  const { toggleAddListForm } = useContext(FormDisplayContext);
  return (
    <section className="playground-container">
      <div className="toolBar">
        <button className="add-list" onClick={toggleAddListForm}>
          Add List
        </button>
      </div>
      <div className="editor">
        {lists.map((list) => {
          return (
            <List
              id={list.id}
              title={list.title}
              cards={list.cards}
              key={list.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PlayGround;
