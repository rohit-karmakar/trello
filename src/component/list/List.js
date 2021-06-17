import "./list.css";
import Card from "../card/Card";

import { useContext } from "react";
import ListsContext from "../../context/listsContext/ListsContext";
import FormDisplayContext from "../../context/formDisplayContext/FormDisplayContext";

const List = (props) => {
  const { id, title, cards } = props;
  const { deleteList, deleteCard, includeCardFromOtherList } =
    useContext(ListsContext);
  const { toggleAddCard } = useContext(FormDisplayContext);

  const deleteListHandler = () => {
    deleteList(id);
  };

  const showAddCardDialog = () => {
    toggleAddCard(id);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    let sourceData = e.dataTransfer.getData("text/plain");
    sourceData = JSON.parse(sourceData);

    /*delete card from source*/
    deleteCard({ listId: sourceData.listId, cardId: sourceData.cardId });

    /*add card to list target list*/
    includeCardFromOtherList(id, {
      id: sourceData.cardId,
      timeStamp: sourceData.timeStamp,
      title: sourceData.title,
      desc: sourceData.desc,
    });
  };

  /**Sorting based on time stamp, i.e. Latest  would be at top*/
  let sortedList = [...cards];
  sortedList.sort((a, b) => b.timeStamp - a.timeStamp);

  return (
    <div
      className="list-tile"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      <div className="list-title-bar">
        <p>{title}</p>
        <button className="delete-list tile-button" onClick={deleteListHandler}>
          X
        </button>
      </div>
      <div className="content">
        {sortedList.map((card) => {
          return (
            <Card
              title={card.title}
              key={card.id}
              desc={card.desc}
              listId={id}
              cardId={card.id}
              timeStamp={card.timeStamp}
            />
          );
        })}
      </div>
      <div className="action-container">
        <button className="tile-button add-card" onClick={showAddCardDialog}>
          +
        </button>
      </div>
    </div>
  );
};

export default List;
