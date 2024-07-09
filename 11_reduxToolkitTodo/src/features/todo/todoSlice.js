//todoSlice we named just for naming convention, so it's clear that we used RTK.

import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid given by redux to provide unique ids

//Important thing in store will have initialState, like in start how will store look, will it be empty or will there be some value. Or we will insert some value from database
const initialState = {
    todos: [{
        id:1,
        text:"Hello world"
    }]
}//can be array or object

//creating slice - larger version of reducer(reducer is functionality)
// function sayHello() {
//     console.log("Hello world");
// }
export const todoSlice = createSlice({
    name: 'todo', //name is a property in RTK 
    initialState,  //every slice have initial state
    reducers: {
        // addTodo: sayHello, //provide reference or we can directly define here
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload //if payload is coming as object then we can acccess action.payload.propertyname we want to access.
            }
            state.todos.push(todo)
        }, 
        //state  - will give acccess to whatever initial state we have curently
        //action - id, todo -  we will get from action
        removeTodo: (state, action) => {
            console.log("Pavan");
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload 
            ))
        }, //there is change from context API, where we declared function but didn't provide definition, but here in RTK we provide whole Definition here. we will have access of 2 values in reducer functions that state, action like we have un useState and useEffect 
        
        updateTodo: (state, action) => {
            state.todos.map((todo)=> (todo.id === action.payload.id ? {...todo,text:action.payload.todoMsg} : todo))
        }
    }
})

//till now we exported todoSlice, but this not how it is expoerted. actually we have export 2 parts of it.
//we will export the functionality separately which defined in reducers. Individual functionality we will export because it be useful in our components.
export const {addTodo,removeTodo} = todoSlice.actions

//store will also need awareness of these reducer otherwise won't be able maintain store, because it is restrictive store. So the only reducers which we will register with it, only those reducer will be used by it to update values in store.
// therefore it requires list of all reducers -->
export default todoSlice.reducer

//Now going to store
//simlarly we have to export above 2 for each slice we will make like authentication and all -->
//export const {addTodo,removeTodo} = todoSlice.actions
// export default todoSlice.reducer





