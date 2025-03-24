import { useState } from "react";
function NewListItem({ setListItemInput }) {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() === "") {
      alert("Please add a task before submitting");
    } else {
      setListItemInput((currListItems) => {
        const newLI = {
          text: newItem,
          key: Math.random() * Math.random(),
        };

        return [newLI, ...currListItems];
      });
      setNewItem("");
    }
  };
  return (
    <form className="new-list-item" onSubmit={handleSubmit}>
      <label htmlFor="newItem">Add new item:</label>
      <input
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        type="text"
        name="newItem"
      />

      <button className="new-task-button" type="submit">
        Add New Task
      </button>
    </form>
  );
}
export default NewListItem;
