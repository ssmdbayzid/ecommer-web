import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '../route/router'

const Wrapper = ({children}) => {
  return (
   <>
   <RouterProvider router={router}>
   {children}
   </RouterProvider>
   </>
  )
}

export default Wrapper