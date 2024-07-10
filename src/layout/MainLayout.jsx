import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='flex-col'>
        <Header />
        <div className="">
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout