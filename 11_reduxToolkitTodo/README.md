# React + Vite
Redux toolKit Notes: 

# Install 2 libraries :

npm install react-redux

npm install @reduxjs/toolkit

## Steps :

Folder in SRC - app - store.js → usually 1 app have 1 store we can see 2 store although its not a good practice.

store.js → configureStore which have object having one key value property, it can be multiple too. to provide it reducer we make reducer in todoSlice.js in feature/todo/todoSlice.js folder.

It is syntax in documentation that we call features as slice. to make import method createSlice.

To make slice 3 things required :

- name: name of the slice - we have given todo
- initialState - by default can be empty array object. like we do in useState.
- reducers: key: function pairs, functions can be defined and imported separately also → these functions have access to 2 values → state, action

action : gives/have action.payload

state : gives/have updated state value in the store, and we can directly update or push values to state.

- **state.todos = state.todos.filter((todo) => (todo.id !== action.payload ))**
- **state.todos.push(todo)**

Then exporting all individual functionalities: 

**export const {addTodo,removeTodo} = todoSlice.actions**

because we don’t know which component will use which reducer.

Then export main source of reducer : because we need to use it in our state in the store.

**export default todoSlice.reducer**

Then in SRC - app - store.js → we give reducer key value as todoReducer after importing it from todoSlice

**export const store = configureStore({ reducer: todoReducer})**

**const dispatch = useDispatch() //to send values we use dispatch**

**dispatch(addTodo(input)) //provide whatever reducer we want in dispatch function to send after importing that reducer.**

**const todos = useSelector(state => state.todos)**
To take values we have selector, we access of state from store from which we can take whatever we want like todos, auth, products.
