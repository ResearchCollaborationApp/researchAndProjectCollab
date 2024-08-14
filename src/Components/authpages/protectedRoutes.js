import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authorizeUser } from "./authorization";

function ProtectedRoutes() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(null); // Initialize with null to represent loading

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const data = await authorizeUser(); // Wait for authorizeUser to resolve
        if (data.loggedIn) {
          setUserIsLoggedIn(true);
          console.log("Proceed to dashboard");
        } else {
          setUserIsLoggedIn(false);
          console.log("Redirect to sign-in page");
        }
      } catch (error) {
        console.error("Error checking authorization", error);
        setUserIsLoggedIn(false); // You might want to redirect to sign-in or handle the error differently
      }
    };

    checkAuthorization();
  }, []);

  if (userIsLoggedIn === null) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any indicator
  }

  return (
    <div>{userIsLoggedIn ? <Outlet /> : <Navigate to="signin" />}</div>
  );
}

export default ProtectedRoutes;
