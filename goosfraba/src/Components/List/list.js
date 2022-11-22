//import list_items from "./listData";
// create list function
// get list data
// component in the app
import ListButtons from "../List-buttons/listButtons.js";

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
}) {
  return (
    <div>
      <li
        key={key}
        to_do_id={to_do_id}
        user_id={user_id}
        done={done}
        priority={priority}
        date_created={date_created}
        date_completed={date_completed}
        due_date={due_date}
      >
        {title}
      </li>
      <ListButtons handleDeleteClick={handleDeleteClick} to_do_id={to_do_id} />
    </div>
  );
}

export default ListItems;
