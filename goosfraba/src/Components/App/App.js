import './App.css';
//import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from 'react';
import React from 'react';
import InputForm from '../User-input/InputForm';
// import Todo from '../User-input/Todo';
import ListItems from '../List/list';
import QuoteGenerator from '../Quotes-generator/quote';
import Links from '../Links/links';

/**
 * Imports needed:
 * CSS (style), useState, useEffect, React (from react), ListItems (component), InputForm (component), QuoteGenerator (component), Links (component)
 * Includes functions: getToDos, handleDeleteClick, handleDoneClick
 * @returns components: QuoteGenerator, InputForm, ListItems, Links
 */
function App() {
  //const [todos, setTodos] = useState([]);
  const [listDataState, setListDataState] = useState([{}]);

  // call a fetch api for a get request useEffect
  // hand the result to our listdatastate
  useEffect(() => {
    /**
     * This function fetch from our database all the ToDo items,
     * updates the setListDataState
     */
    async function getToDos() {
      const response = await fetch('http://localhost:3001/api/userToDos', {
        headers: { accept: 'application/json' },
      });
      const data = await response.json();
      console.log(data);
      setListDataState(data.payload);
    }
    getToDos();
  }, []);

  /**
   * Updates the setState by deleting an item from the list finding it with its id
   * Handle delete function
   * Needs to take an id
   * @param {number} index Position in the array
   * @param {number} id Id of the ToDo to delete
   */
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
  }

  // Take a look at the delete buttons, only work from the bottom up
  // setDoneState not being use:
  const [doneState, setDoneState] = useState('toDoTitle');

  /**
   * Updates the setState by crossing an item as done from the list finding it with its id
   * Handle done function
   * @param {number} index The position of the item in the array
   */
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

        <table className="listContainer">
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
