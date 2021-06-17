import "./card.css";
import ListsContext from "../../context/listsContext/ListsContext";
import { useContext } from "react";

const Card = (props) => {
  const { deleteCard } = useContext(ListsContext);
  const { title, desc, listId, cardId, timeStamp } = props;

  const deleteCardHandler = () => {
    deleteCard({ listId, cardId });
  };

  const dragStartHandler = (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ listId, cardId, title, desc, timeStamp })
    );
  };

  return (
    <div className="card" onDragStart={dragStartHandler} draggable>
      <div className="card-title-bar">
        <p>{title}</p>
        <button className="delete-card" onClick={deleteCardHandler}>
          X
        </button>
      </div>
      <div className="desc-caontainer">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
