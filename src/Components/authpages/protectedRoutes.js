import { useEffect,useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../App"
// UserContext to pass throught all the routes that are inside protected route

function ProtectedRoutes() {
  console.log(UserContext);
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
          console.log("user is logged in")
          console.log(data.user)
          setUser(data.user); 
          console.log(user)
        } 
      } catch (error) {
        console.error("Error checking authorization", error);
      }
    };

    checkAuthorization();
  }, []);
  console.log(user);
  return user ? (
      <Outlet />
  ) : (
    <Navigate to="signin" /> // Redirect to sign-in page if not logged in
  );
}

export default ProtectedRoutes;

