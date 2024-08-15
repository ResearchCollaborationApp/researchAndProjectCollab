import { useState, useEffect, createContext, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authorizeUser } from "./authorization";

// UserContext to pass throught all the routes that are inside protected route
export const UserContext = createContext(null);

function ProtectedRoutes() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const data = await authorizeUser(); // Wait for authorizeUser to resolve
        if (data.loggedIn) {
          setUser(data.user); // Store user data here
          console.log("Proceed to dashboard");
        } else {
          setUser(false);
          console.log("Redirect to sign-in page");
        }
      } catch (error) {
        console.error("Error checking authorization", error);
        setUser(false); // Handle error
      }
    };

    checkAuthorization();
  }, []);

  if (user === null) {
    return <div>Loading...</div>; //Replace this later with a loading spinner
  }

  return user ? (
      <Outlet />
  ) : (
    <Navigate to="/signin" /> // Redirect to sign-in page if not logged in
  );
}

export default ProtectedRoutes;

