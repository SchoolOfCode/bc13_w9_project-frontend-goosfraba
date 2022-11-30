import "./App.css";
import ListItems from "../List/list";
//import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import React from "react";
import InputForm from "../User-input/InputForm";
// import Todo from '../User-input/Todo';
import QuoteGenerator from "../Quotes-generator/quote";
import Links from "../Links/links";

function App() {
  //make a state
  //const [todos, setTodos] = useState([]);
  const [listDataState, setListDataState] = useState([{}]);

  // call a fetch api for a get request useEffect
  // hand the result to our listdatastate
  useEffect(() => {
    async function getToDos() {
      const response = await fetch("http://localhost:3001/api/userToDos", {
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      console.log(data);
      setListDataState(data.payload);
    }
    getToDos();
  }, []);

  //handle delete function
  //needs to take an id
  function handleDeleteClick(index, id) {
    setListDataState([
      ...listDataState.slice(0, index),
      ...listDataState.slice(index + 1),
    ]);
    //This deletes but index needs setting to the ID
    //   async function updateDelete(id) {
    //     console.log("todo", id)
    //     const response = await fetch(
    //       `http://localhost:3001/api/userToDos/${id}`,
    //       {
    //         method: "DELETE",
    //       }
    //     );
    //     return response.json();
    //   }
    //   updateDelete(id);
    console.log("this is delete button", listDataState[index].done);
  }

  // function handleDeleteClick(index) {
  //   console.log(index);
  //   setListDataState([
  //     ...listDataState.slice(0, index),
  //     ...listDataState.slice(index + 1),
  //   ]);
  // }

  // Take a look at the delete buttons, only work from the bottom up
  const [doneState, setDoneState] = useState("toDoTitle");
  function handleDoneClick(index) {
    setListDataState([
      ...listDataState.slice(0, index),
      { ...listDataState[index], done: !listDataState[index].done },
      ...listDataState.slice(index + 1),
    ]);

    // if(listDataState[index].done === true){
    //   const newState = "toDoTitleDone"
    //   setDoneState(newState)
    // }

    // if(listDataState[index].done === false){
    //   const newState = "toDoTitle"
    //   setDoneState(newState)
    // }

    console.log("this is DONE button", listDataState);
  }

  return (
    <html className="html">
      <img className="logo" src="/Pictures/GoosLogo.png" alt="Logo" />
      <header className="header">
        <h1 className="title">G o o s f r a b a</h1>
        <hr className="hr" />
        <p className="clean">keeping code clean</p>
      </header>

      <h3 className="quote">
        <QuoteGenerator />
      </h3>

      <body className="body">
        <InputForm
          list_data={listDataState}
          list_data_state={setListDataState}
        />

        <table className="listContainer" data-testid="listcontainer">
          {listDataState.map((list, index) => (
            <ListItems
              // need to check this. Currently not working properly.
              //key={uuidv4()}
              listDataState={listDataState}
              doneState={doneState}
              title={list.to_do_title}
              to_do_id={list.to_do_id}
              user_id={list.user_id}
              done={list.done}
              priority={list.priority}
              // date_created={list.date_created}
              // date_completed={list.date_completed}
              // due_date={list.due_date}
              handleDeleteClick={handleDeleteClick}
              handleDoneClick={handleDoneClick}
              id={index}
              //pass button text
              //buttontext={buttontext}
            />
          ))}
        </table>
      </body>
      <Links />
    </html>
  );
}
export default App;
