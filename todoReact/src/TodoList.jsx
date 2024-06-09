import { useState } from "react"

export default function TodoList(){
    let [todos,settodos]=useState(["Sample task"])
    let [newTodo,setnewTodo]=useState("")

    let addNewTask = ()=>{
        // console.log("add new task in todo");
        settodos([...todos,newTodo])
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
                todos.map((task)=>{
                   return <li>{task}</li> 
                })
                }
            </ul>
        </div>
    )
}