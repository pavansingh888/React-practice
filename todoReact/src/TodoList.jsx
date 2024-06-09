import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,settodos]=useState([{task : "Sample task",id : uuidv4() }]);
    let [newTodo,setnewTodo]=useState("");

    let addNewTask = ()=>{
        // console.log("add new task in todo");
        settodos([...todos,{task: newTodo,id : uuidv4()}])
        setnewTodo("")
    }
    let updateTodoValue = (event)=>{
        // console.log(event.target.value);
        setnewTodo(event.target.value)
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
                   return <li key={todo.id}>{todo.task}</li> 
                })
                }
            </ul>
        </div>
    )
}