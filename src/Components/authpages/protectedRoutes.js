import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authorizeUser } from './authorization'
function ProtectedRoutes() {
  authorizeUser().then((loggedIn) => {
    if (loggedIn) {
      console.log("Proceed to dashboard");
    } else {
      console.log("Redirect to sign-in page");
    }
  });
  return (
    <div>
      {/* {isUserLoggedIn?<Outlet/>:<Navigate to = "signin"/>} */}
    </div>
  )
}

export default ProtectedRoutes
