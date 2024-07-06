import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//what outlet does is - it will use this layout as base, and whatever things will come the header and footer will remain same and it'll only change in <Outlet> 
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout