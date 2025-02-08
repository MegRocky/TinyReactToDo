import { useState } from "react";

function ListItem({ listItemInput }) {
  const [listItemComplete, setListItemComplete] = useState("");
  return (
    <div className={listItemComplete === true ? "list-item-complete" : ""}>
      <h3>{listItemInput}</h3>
      <button
        onClick={() => {
          setListItemComplete(() => {
            return true;
          });
        }}
      >
        Complete
      </button>
    </div>
  );
}
export default ListItem;
