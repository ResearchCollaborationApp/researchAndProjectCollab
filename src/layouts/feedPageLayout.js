import { Outlet } from "react-router-dom"
import { useLocation, useLoaderData } from "react-router-dom";
export default function FeedPageLayout() {

  return (
    <>
    <main>
        <Outlet/>
      </main>
    </>
  )
}
