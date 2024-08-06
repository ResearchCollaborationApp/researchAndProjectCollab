import Navigation from "../navbar/navigation"
import UserInfo from "../profilepage/userInfo"
import AutoScroll from "./autoScroll"
import ScrollingFeed from "./scrollingfeed/scrollingFeed"
import TopResearch from "./topResearch"
export default function FeedPage() {
  return (
    <>
    <Navigation/>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-4 lg:gap-3 lg:mx-5 px-2">
      <div className="h-fit hidden lg:block md:block">
      <div className="max-w-sm overflow-hidden shadow-md">
        <h1 className=" bg-gray-200 px-6 py-4 font-bold text-lg">
          Top Research in School
        </h1>
        <TopResearch/>
        <TopResearch/>
      </div>
      </div>
      <div className="h-fit lg:col-span-2">
        <ScrollingFeed/>
      </div>
      <div className="h-fit hidden border-rounded lg:block md:block">
        <AutoScroll/>
      </div>
  </div>
  </>
  )
}
