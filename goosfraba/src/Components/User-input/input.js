import React, { useState } from 'react'

function Input({ addTodo }) {
    const [todoItem, setTodoItem] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodoItem({ ...todoItem, task: e.target.value });

    }

    function handleClick(e) {
        let newInput = e.target.value;

        setTodoItem(newInput);
        console.log(newInput)

        console.log("Adding");



        e.target.value = "";
        console.log("Clearing")

    }



    return (
        <div>
            <input
                name="task"
                type="text"
                value={todo.task}
                placeholder="Add To-Do"
                onChange={handleTaskInputChange}></input>
            <button type="submit">Search</button>
            <div>
            </div>
        </div>

    )
}


export default Input
