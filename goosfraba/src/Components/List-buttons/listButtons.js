// create list buttons functions
// Need three buttons

function ListButtons({ handleDeleteClick }) {
  return (
    <div>
      <button onClick={handleDeleteClick}>Delete Click</button>
      <button>B2</button>
      <button>B3</button>
    </div>
  );
}

export default ListButtons;
