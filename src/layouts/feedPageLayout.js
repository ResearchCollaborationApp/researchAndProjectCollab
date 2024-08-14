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
    <h1>This is a protected route</h1>
    <p>Also the feed page</p>
    <main>
        <Outlet/>
      </main>
    </>
  )
}
