
import { Outlet, Navigate, useOutletContext } from "react-router-dom";

function PublicRoutes() {
  {console.log("you visited public routes")}
  const context = useOutletContext();
  const user = context.user;
  return !user ? (
    <Outlet context = {context} />
  ) : (
    <Navigate to="/feedpage" replace /> // Redirect to sign-in page if not logged in
  );
}


export default PublicRoutes;
