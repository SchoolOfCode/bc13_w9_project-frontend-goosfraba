//import list_items from "./listData";
// create list function
// get list data
// component in the app
import ListButtons from "../List-buttons/listButtons.js";
import "./list.css"

function ListItems({
  key,
  title,
  to_do_id,
  user_id,
  done,
  priority,
  date_created,
  date_completed,
  due_date,
  handleDeleteClick,
  handleDoneClick,
  id,
}) {
  return (

    <div class="container">
      <tr class="list">
        <td
          key={key}
          to_do_id={to_do_id}
          user_id={user_id}
          done={done}
          priority={priority}
          date_created={date_created}
          date_completed={date_completed}
          due_date={due_date}
          id={id}
        >
          {title}
          <ListButtons
            handleDeleteClick={handleDeleteClick}
            to_do_id={to_do_id}
            handleDoneClick={handleDoneClick}
            id={id}
          />
        </td>
      </tr>
    </div>
  );
}

export default ListItems;
