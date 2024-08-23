
import { Outlet, Navigate, useOutletContext } from "react-router-dom";

function PublicRoutes() {
  const context = useOutletContext();
  const user = context.user;
  {console.log(user)}
  return !user ? (
    <Outlet context = {context} />
  ) : (
    <Navigate to="feedpage" /> // Redirect to sign-in page if not logged in
  );
}


export default PublicRoutes;
