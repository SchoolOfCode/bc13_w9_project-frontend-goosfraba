import React, { useState } from "react";
//import Input from "./input";
import { v4 as uuidv4 } from "uuid";
import ListItems from "../List/list";
import "./input.css"


function InputForm({ list_data, list_data_state }) {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState(1);

  function handleChange(event) {
    let newInputValue = event.target.value;
    setInputValue(newInputValue);
  }
  console.log(inputValue);

  function prioritySelector(event) {
    let selectedPriority = event.target.value;
    setPriority(selectedPriority);
    console.log("Priority", selectedPriority);
  }

  function handleClick() {
    let addedTodo = inputValue;
    if (inputValue !== "") {
      list_data_state([
        ...list_data,
        {
          to_do_id: uuidv4(), //primary key
          to_do_title: addedTodo,
          user_id: 103, //foreign key
          done: false,
          priority: priority,
          date_created: 20221122,
          date_completed: null,
          due_date: 20221122,
        },
      ]);
    }
  }

  return (
    <div className="inputForm">
      <input className="inputTodo" onChange={handleChange} placeholder="Add-to-do..."></input>

      <label htmlFor="priority"></label>
      <select className="dropdown"

        onChange={(e) => {
          prioritySelector(e);
        }}
        name="priority"
        id="priority"
      >
        <option value="">Select Priority</option>
        <option value="1">Top</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>
      <button className="add" onClick={handleClick}>Add To-Do!</button>
    </div>
  );
}

export default InputForm;
