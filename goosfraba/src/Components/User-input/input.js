import React from 'react'
import Todo from './Todo';



function Input({ todos }){
    return (
        todos.map(todo => {
            return <Todo key={todo.to_do_id} todo={todo} />
        })
        
    )
}




export default Input
