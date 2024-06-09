import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,settodos]=useState([{task : "Sample task",id : uuidv4() }]);
    let [newTodo,setnewTodo]=useState("");

    let addNewTask = ()=>{
        settodos((prevTodo)=>{ return [...prevTodo,{ task: newTodo,id : uuidv4() }] })
        setnewTodo("") 
    }
    let updateTodoValue = (event)=>{
        setnewTodo(event.target.value)
    }
    let deleteTodo = (id) => {     
        settodos((prevTodo) => prevTodo.filter((todo) => todo.id != id))
        }
    
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br /><br />
            <hr />
            <h4>Tasks List</h4>
            <ul>
                {
                todos.map((todo)=>{
                   return <li key={todo.id}>
                   <span>{todo.task}</span>
                   &nbsp;&nbsp;&nbsp;
                   <button onClick={() => deleteTodo(todo.id) //Arrow function doesn't execute the function but simply create a copy of that function.
                   }>Delete</button> 
                   </li> 
                })
                }
            </ul>
        </div>
    )
}