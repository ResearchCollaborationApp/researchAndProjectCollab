import { Outlet } from "react-router-dom"
import { useLocation, useLoaderData } from "react-router-dom";
export default function FeedPageLayout() {
  // const location = useLocation();
  // const loaderData = useLoaderData();
  // const fetchUserData =  () => {
  //   if (location.state) {
  //     return location.state;
  //   }
  //    return loaderData;
  // };
  
  // // Usage
  // const user = fetchUserData();
  // if(!user){
  //   console.log("no such user")
  // }

  return (
    <>
    <div>This is a protected route</div>
    <main>
        <Outlet/>
      </main>
    </>
  )
}
