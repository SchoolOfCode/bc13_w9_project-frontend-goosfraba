// create list buttons functions
// Need three buttons

function ListButtons({ handleDeleteClick, to_do_id }) {
  return (
    <div>
      <button to_do_id={to_do_id} onClick={() => {handleDeleteClick(to_do_id)}}>Delete Click</button>
      <button>B2</button>
      <button>B3</button>
    </div>
  );
}

export default ListButtons;
