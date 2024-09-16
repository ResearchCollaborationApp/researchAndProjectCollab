import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function ProtectedRoutes() {
  {
    console.log("you visited private routes");
  }
  const context = useOutletContext();
  const user = context.user; 
  const [loading, setLoading] = useState(true); //Local loading state
  const checkAuthorization = async () => {
    try {
      const response = await fetch("/auth/check-session", {
        method: "GET",
        credentials: "include", // Include cookies in the request
      });
      const data = await response.json();
      if (data.loggedIn) {
        console.log("user is logged in ");
        context.setUser(data.user);
      }
    } catch (error) {
      console.error("Error checking authorization", error);
    } finally {
      setLoading(false); // Set loading to false regardless of outcome
    }
  };

  useEffect(() => {
    checkAuthorization(); // Run the authorization check only on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while checking authorization
  }
  return user ? (
    <Outlet context={context} />
  ) : (
    <Navigate to="signin" replace /> // Redirect to sign-in page if not logged in
  );
}

export default ProtectedRoutes;
