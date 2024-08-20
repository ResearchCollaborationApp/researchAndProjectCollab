import { useEffect, useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./contexts";

function ProtectedRoutes() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true); // Local loading state

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("/auth/check-session", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });
        const data = await response.json();
        if (data.loggedIn) {
          setUser(data.user); 
        }
      } catch (error) {
        console.error("Error checking authorization", error);
      } finally {
        setLoading(false); // Set loading to false regardless of outcome
      }
    };

    checkAuthorization();
  }, []);

  // Show a loading indicator or nothing while checking authorization
  if (loading) {
    return <div>Loading...</div>; //  replace this with a spinner or any loading component
  }

  // If user is set, render the protected routes, otherwise redirect to sign-in
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="signin" /> // Redirect to sign-in page if not logged in
  );
}

export default ProtectedRoutes;


