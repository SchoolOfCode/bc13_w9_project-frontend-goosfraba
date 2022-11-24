// create list buttons functions
// Need three buttons
import "./listButtons.css"


function ListButtons({ handleDeleteClick, to_do_id, handleDoneClick, id }) {
  return (
    <section>

      <button id="Buttons" className="editB"><img id="img" src="/Pictures/editButton.png" alt="edit Button" /></button>
      <button id="Buttons" className="tickB"
        onClick={() => {
          handleDoneClick(id);
        }}
      ><img id="img" src="/Pictures/tickButton.png" alt="done Button" />

      </button>
      <button id="Buttons" className="delB"
        onClick={() => {
          handleDeleteClick(id);
        }}
      >
        <img id="img" src="/Pictures/deleteButton.png" alt="delete Button" />
      </button>
    </section>
  );
}

export default ListButtons;
