function ClearButton({ setListItemInput }) {
  return (
    <button
      onClick={() => {
        setListItemInput((currListItems) => {
          return "";
        });
      }}
    >
      Clear
    </button>
  );
}
export default ClearButton;
