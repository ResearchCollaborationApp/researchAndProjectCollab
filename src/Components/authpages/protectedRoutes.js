import { useState, useEffect, createContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authorizeUser } from "./authorization";

// UserContext to pass throught all the routes that are inside protected route
export const UserContext = createContext(null);

function ProtectedRoutes() {
  const [user, setUser] = useState(null); // Initialize with null to represent loading

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
    return <div>Loading...</div>; // You can replace this with a loading spinner or any indicator
  }

  return user ? (
    <UserContext.Provider value={user}>
      <Outlet />
    </UserContext.Provider>
  ) : (
    <Navigate to="/signin" /> // Redirect to sign-in page if not logged in
  );
}

export default ProtectedRoutes;

