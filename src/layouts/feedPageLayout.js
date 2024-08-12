import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Navigation from "../Components/navbar/navigation"
export default function FeedPageLayout() {
  const location = useLocation();
  const user = location.state;
  if(!user){
    console.log("no such user")
  }
  return (
    <>
    <Navigation user = {user}/>
    <main>
        <Outlet/>
      </main>
    </>
  )
}
