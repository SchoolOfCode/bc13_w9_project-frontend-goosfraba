import ListButtons from '../List-buttons/listButtons.js';
import './listItems.css';
// import list_items from "./listData";
// This is from our local database ^^

/** ListItems Docs
 * Imports needed: CSS (style), ListButtons (component that includes the delete, edit, done buttons)
 * This function takes the props of each item on the list as an object:
 * @param {object} props - the following props:
 * title: string - name of the to do
 * to_do_id: number - id of the to do item
 * user_id: number - id of the user
 * done: boolean - task completed or not
 * priority: dropdown:
 *    - value="" Select Priority
 *    - value="1" Top
 *    - value="2" Medium
 *    - value="3" Low
 * date_created: NOT IN USE. Date - when to do was created
 * date_completed: NOT IN USE. Date - when to do is completed
 * due_date: NOT IN USE. Date - when to do is due
 * handleDeleteClick - function that updates the setState by deleting an item from the list finding it with its id
 * handleDoneClick - function that updates the setState by crossing an item as done from the list finding it with its id
 * id: number - index created when listDataState was mapped in App.js
 * @returns
 * The items in the ToDo list
 * Done, Edit and Delete buttons next to them
 */
function ListItems({
  title,
  to_do_id,
  user_id,
  done,
  priority,
  handleDeleteClick,
  handleDoneClick,
  id,
  // Date props - not in use:
  // date_created,
  // date_completed,
  // due_date,
}) {
  if (done === false) {
    return (
      <tr className="items" id="toDoTitle">
        <td
          to_do_id={to_do_id}
          user_id={user_id}
          done={done}
          priority={priority}
          id={id}
          // Date props - not in use:
          // date_created={date_created}
          // date_completed={date_completed}
          // due_date={due_date}
        >
          <span>{title}</span>
        </td>
        <td>
          <ListButtons
            handleDeleteClick={handleDeleteClick}
            to_do_id={to_do_id}
            handleDoneClick={handleDoneClick}
            id={id}
          />
        </td>
      </tr>
    );
  }

  if (done === true) {
    return (
      <tr className="items" id="toDoTitleDone">
        <td
          to_do_id={to_do_id}
          user_id={user_id}
          done={done}
          priority={priority}
          id={id}
          // Date props - not in use:
          // date_created={date_created}
          // date_completed={date_completed}
          // due_date={due_date}
        >
          <span>{title}</span>
        </td>
        <td>
          <ListButtons
            handleDeleteClick={handleDeleteClick}
            to_do_id={to_do_id}
            handleDoneClick={handleDoneClick}
            id={id}
          />
        </td>
      </tr>
    );
  }
}

export default ListItems;
