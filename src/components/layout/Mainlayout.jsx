import React from 'react'
import Navbar from './navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Mainlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainlayout