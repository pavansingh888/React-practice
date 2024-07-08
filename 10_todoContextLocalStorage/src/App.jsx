import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) => {
     setTodos((prev) => [{
      id : Date.now(),
      ...todo
     },...prev])
  }
  const updateTodo = (id,todo) => {
     setTodos((prev)=> prev.map((prevTodo) => prevTodo.id===id ? todo:prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  //Interesting is checkmark toggle, we will need to go inside todo object and mark completed as true
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo))
  }
  //Using Local Storage:
  /*`localStorage` is similar to [`sessionStorage`], except that while `localStorage` data has no expiration time, `sessionStorage` data gets cleared when the page session ends — that is, when the page is closed. (`localStorage` data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.
  The keys and the values stored with `localStorage` are *always* in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

  localStorage.setItem("myCat", "Tom");
  const cat = localStorage.getItem("myCat");
  localStorage.removeItem("myCat");
  localStorage.clear(); 
  */
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[]) 

  // any change in todos state variable will go thru context API.and Context API provider will give us updated todos. Now we want whenever this todos state is updated - we should update the todos in local storage as well.
  //Why we can't use the same above useEffect by providing todos dependancy, because whenever there will be a change, above useEffect will get that local storage as well and that we don't want due to performance optimization reason. and since there is no need to get updated value from storage as wel already have updated todos value in state variable. 
  //So we will create another useEffect to store just the changes of todos in our local storage.

  useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]) 

  return (
    <TodoProvider value={{todos, addTodo, updateTodo ,deleteTodo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            {/* because we know inside loop this DIV will repeat, And do we know every DIV is unique or not how we will find out that? - for this 'keys' are useful.
                            if we won't use keys, performance will get degrade #optimization */}

                            <TodoItem todo={todo}/>
                          </div>
                        ) )}

                        {/* 
                        {} - with curly braces we need to return keyword
                        () - paranthesis can be used for auto-return 
                         */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
