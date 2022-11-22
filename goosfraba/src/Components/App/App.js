import "./App.css";
import ListItems from "../List/list";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

let list_data = [
  {
    to_do_title: "Cut the grass",
    to_do_id: 1, //primary key
    user_id: 100, //foreign key
    done: true,
    priority: 1,
    date_created: 20221011,
    date_completed: 20220101,
    due_date: 20220101,
  },
  {
    to_do_title: "Get milk",
    to_do_id: 2, //primary key
    user_id: 101, //foreign key
    done: false,
    priority: 2,
    date_created: 20221011,
    date_completed: null,
    due_date: 20221209,
  },
  {
    to_do_title: "Complete goosfraba",
    to_do_id: 3, //primary key
    user_id: 103, //foreign key
    done: false,
    priority: 3,
    date_created: 20220510,
    date_completed: null,
    due_date: 20221212,
  },
];

function App() {
  //make a state
  const [listDataState, setListDataState] = useState(list_data);

  //handle delete function
  //needs to take an id
  function handleDeleteClick(index) {
    setListDataState([
      ...listDataState.slice(0, index),
      ...listDataState.slice(index + 1),
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {list_data.map((list) => (
            <ListItems
              // need to check this. Currently not working properly.
              //key={uuidv4()}
              title={list.to_do_title}
              to_do_id={list.to_do_id}
              user_id={list.user_id}
              done={list.done}
              priority={list.priority}
              date_created={list.date_created}
              date_completed={list.date_completed}
              due_date={list.due_date}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
