// create list buttons functions
// Need three buttons

function ListButtons({ handleDeleteClick, to_do_id, handleDoneClick, id }) {
  return (
    <section>
      <button
        onClick={() => {
          handleDeleteClick(id);
        }}
      >
        Delete Click
      </button>
      <button>Edit</button>
      <button
        onClick={() => {
          handleDoneClick(to_do_id);
        }}
      >
        Done
      </button>
    </section>
  );
}

export default ListButtons;
