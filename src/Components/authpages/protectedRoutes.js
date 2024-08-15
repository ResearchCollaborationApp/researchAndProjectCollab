import { useEffect, createContext, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// UserContext to pass throught all the routes that are inside protected route
export const UserContext = createContext(null);

function ProtectedRoutes() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("/auth/check-session", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });
        const data = await response.json();
        if (data.loggedIn) {
          setUser(data.user); // Store user data here
        } 
      } catch (error) {
        console.error("Error checking authorization", error);
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

