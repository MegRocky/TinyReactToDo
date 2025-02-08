import { useState } from "react";
import "./App.css";
import Header from "./Header";
import NewListItem from "./NewListItem";
import ListBody from "./ListBody";
import ListItem from "./ListItem";
import ClearButton from "./ClearButton";

function App() {
  const [listItemInput, setListItemInput] = useState([]);
  return (
    <>
      <Header className="header-element" />
      <NewListItem setListItemInput={setListItemInput} />
      <ListBody
        className="list-body"
        listItemInput={listItemInput}
        setListItemInput={setListItemInput}
      />
    </>
  );
}

export default App;
