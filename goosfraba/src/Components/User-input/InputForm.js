import React, { useState } from "react";
//import Input from "./input";
import { v4 as uuidv4 } from "uuid";
import ListItems from "../List/list";
import "./input.css"


/**
 * This function contains handleChange, prioritySelector and handleClick
 * @returns an input field, a priority selector and an add to list button
 */

function InputForm({ list_data, list_data_state }) {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState(1);

  /**
 * This function updates the set input value 
 * event is the input feild that we are targetting
 */
  function handleChange(event) {
    let newInputValue = event.target.value;
    setInputValue(newInputValue);
  }

  /**
 * This function updates the set priority value 
 * event is the dropdown that we are targetting
 */

  function prioritySelector(event) {
    let selectedPriority = event.target.value;
    setPriority(selectedPriority);
  }

  /**
 * This function adds the user input to the set to do list on the click of the button 
 * also makes it so the input field is empty when the add button is clicked
 * event is the click from the button 
 */

  function handleClick(e) {
    e.preventDefault();

    let addedTodo = inputValue;

    if (inputValue !== "") {
      list_data_state([
        ...list_data,
        {
          todo_id: uuidv4(), //primary key
          user_todo_id: 1, //foreign key
          to_do_title: addedTodo,
          done: false,
          priority: priority,
          // date_created: 20221122,
          // date_completed: null,
          // due_date: 20221122,
        },
      ]);
    }

    setInputValue("");


  }

  //   async function addNewTodo() {
  //     let addedTodo = inputValue;
  //     const response = await fetch("http://localhost:3001/api/userToDos", {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       payload: {
  //         to_do_title: addedTodo,
  //         user_id: 1, //foreign key
  //         done: false,
  //         priority: 1,
  //       },
  //     });
  //   }

  return (
    <form onSubmit={handleClick} className="inputForm">
      <input className="inputTodo" value={inputValue} onChange={handleChange} placeholder="Add-to-do..."></input>

      <label htmlFor="priority"></label>
      <select className="dropdown"

        onChange={(e) => {
          prioritySelector(e);
        }}
      // name="priority"
      // id="priority"
      >
        <option value="">Select Priority</option>
        <option value="1">Top</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>
      <input type="submit" className="add" value="Add to do" />
    </form>
  );
}

export default InputForm;
