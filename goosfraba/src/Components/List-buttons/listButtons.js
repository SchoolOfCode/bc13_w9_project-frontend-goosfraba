import './listButtons.css';

/** ListButtons Docs
 * Imports needed: ./listButtons.css (style)
 * This function adds the functions to each buttons
 * ALso adds the images to each button to have them instead of text.
 * This function takes the props of each item on the list as an object:
 * @param {object} props - the following props:
 * handleDeleteClick - function that updates the setState by deleting an item from the list finding it with its id
 * handleDoneClick - function that updates the setState by crossing an item as done from the list finding it with its id
 * id: number - index created when listDataState was mapped in App.js
 * to_do_id - NOT IN USE - ID of the To do Item
 * @returns the buttons with their functionality of deleting and crossing out, also adds an image to each button
 */
function ListButtons({ handleDeleteClick, to_do_id, handleDoneClick, id }) {
  return (
    <section>
      <button id="Buttons" data-testid="editB" className="editB">
        <img id="img" src="/Pictures/editButton.png" alt="edit Button" />
      </button>
      <button
        data-testid="doneB"
        id="Buttons"
        className="tickB"
        onClick={() => {
          handleDoneClick(id);
        }}
      >
        <img id="img" src="/Pictures/tickButton.png" alt="done Button" />
      </button>
      <button
        data-testid="deleteB"
        id="Buttons"
        className="delB"
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
