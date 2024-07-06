/*Learning :
1. Using react router in 2 ways 
2. How Outlet works - A layout component is typically used to define a common layout for multiple routes. The <Outlet /> component within the layout component specifies where the nested routes should be rendered.
3. Use of NavLink for active link styling instead of Link 
4. Use of Link instead of <a>, directly new values of nodes gets injected in DOM instead of page refresh
5. Dynamically access values from route url, using useParams() hook in corresponding route component.
6. Using loader in Routes for optimization by calling the fetch function before rendering the route. and accessing the data from the loader function beforehand using useLoaderData() hook.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { getuserInfo } from './components/Github/Github.jsx'

//router can be made in 2 ways.
//1st way:
// const router = createBrowserRouter([{
//   path:'/',
//   element: <Layout/>,
//   children: [
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"contact",
//       element: <Contact/>
//     }
//   ]
// }])

//2nd way:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/> /*Automatically we will have access of userid in User.jsx */}/> 
      <Route 
      loader={getuserInfo} //#optimize 
      path='github' 
      element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router }/> 
  </React.StrictMode>,
)
