import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isUserLoggedIn } from './authorization'
function ProtectedRoutes() {
  
  return (
    <div>
      {isUserLoggedIn?<Outlet/>:<Navigate to = "signin"/>}
    </div>
  )
}

export default ProtectedRoutes
