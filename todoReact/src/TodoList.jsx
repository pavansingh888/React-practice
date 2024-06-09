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
    let upperCaseAll = ()=>{
       settodos((prevTodo)=>{
        return prevTodo.map((todo) => {
            return {
                ...todo,
                task : todo.task.toUpperCase()
            };
        });
       });
    };
   let upperCaseOne = (id)=>{
    settodos((prevTodo)=>{
        return prevTodo.map((todo) => {
            if(todo.id==id){
                 return {
                ...todo,
                task : todo.task.toUpperCase()
            };}else{
                return todo;
            }
        });
       });
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
                   <button onClick={() => upperCaseOne(todo.id) //Arrow function doesn't execute the function but simply create a copy of that function.
                   }>Uppercase One</button> 
                   </li> 
                })
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    )
}