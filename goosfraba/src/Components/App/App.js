//import logo from './logo.svg';
import { useState } from 'react';
import Input from '../User-input/input';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodo(todoItem) {
    setTodoItems([todoItem, ...todoItems]);

  }



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Input addTodo={addTodo} />
      </body>
    </div>

  )
}
export default App;
