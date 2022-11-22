import React, { useState } from "react";
import Input from "./input";
import { v4 as uuidv4 } from 'uuid';


function InputForm(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState();

    function handleChange(event){
        let newInputValue = event.target.value;
        setInputValue(newInputValue);
        
    }
    console.log(inputValue);

    function prioritySelector(event){
        let selectedPriority = event.target.value;
        setPriority(selectedPriority);
        console.log("Priority", selectedPriority);

    }

    // prioritySelector();

    function handleClick(){
        let addedTodo = inputValue;
        setTodos([...todos, {
            to_do_id: uuidv4(), //primary key
            to_do_title: addedTodo,
            user_id: 103, //foreign key
            done: false,
            priority: priority,
            date_created: 20221122,
            date_completed: null,
            due_date: 20221122,
          }]);
        
    }


console.log(todos);

    return <div>
        <input onChange={handleChange} placeholder="Add-to-do..."></input>

        <label htmlFor="priority">Set Priority</label>
        <select onChange={(e) => {prioritySelector(e)}} name="priority" id="priority">
            <option value="1">Top</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>

        <button onClick={handleClick}>Add To-Do!</button>
        <Input todos={todos}/>
    </div>
}





















export default InputForm;