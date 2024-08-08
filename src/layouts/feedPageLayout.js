import { Outlet } from "react-router-dom"
import Navigation from "../Components/navbar/navigation"
export default function FeedPageLayout() {
  return (
    <>
    <Navigation/>
    <main>
        <Outlet/>
      </main>
    </>
  )
}
