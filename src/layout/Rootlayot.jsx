import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../pages/Nav'
import Footer from '../pages/Footer'

const Rootlayot = () => {
  return (
    <div>
    <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Rootlayot
