import ListItem from "./ListItem";
import ClearButton from "./ClearButton";

function ListBody({ listItemInput, setListItemInput }) {
  return (
    <>
      <div className="list-body">
        {listItemInput.length !== 0
          ? listItemInput.map((item) => {
              return (
                <ListItem
                  setListItemInput={setListItemInput}
                  item={item}
                  key={item.key}
                />
              );
            })
          : ""}

        {listItemInput.length !== 0 ? (
          <ClearButton setListItemInput={setListItemInput} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default ListBody;
