import { useState } from "react";

function ListItem({ item, setListItemInput, key }) {
  const [listItemComplete, setListItemComplete] = useState("");
  {
    item.complete = listItemComplete;
  }
  return (
    <div className={item.complete ? "list-item-complete" : ""}>
      <h3>{item.text}</h3>
      <button
        onClick={() => {
          setListItemComplete(() => {
            return true;
          });
          setListItemInput((currListItems) => {
            const updatedItems = currListItems.map((task) => {
              if (task.key === key) {
                task.complete = true;
                return task;
              } else {
                return task;
              }
            });
            return updatedItems;
          });
        }}
      >
        Complete
      </button>
    </div>
  );
}
export default ListItem;
