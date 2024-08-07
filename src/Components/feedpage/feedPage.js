import Navigation from "../navbar/navigation"
import UserInfo from "../profilepage/userInfo"
import AutoScroll from "./autoScroll"
import ScrollingFeed from "./scrollingfeed/scrollingFeed"
import TopResearch from "./topResearch"
export default function FeedPage() {
  return (
    <>
    <Navigation/>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 lg:gap-6 lg:mx-8 px-8">
      <div className="h-fit hidden lg:block md:block lg:col-span-2">
        <div className="max-w-sm overflow-hidden shadow-md">
          <h1 className=" bg-gray-200 px-6 py-4 font-bold text-lg">
            Top Research in School
          </h1>
          <TopResearch/>
          <TopResearch/>
        </div>
      </div>
      <div className="h-fit col-span-1 lg:col-span-3">
        <div className = "h-20 w-full bg-white mb-4 border rounded">
          <div className="flex items-center py-1 px-3">
            <img
            alt=""
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="w-10 h-10 items-center rounded-full object-cover"
          />
            <div className = "items-start ml-3 p-3 mt-3  bg-gray-200 rounded border border-slate-300">
              Share something...
            </div>
          </div>
          
        </div>
        <ScrollingFeed/>
      </div>
      <div className="h-fit lg:col-span-2 hidden border-rounded lg:block md:block">
      <h1 className=" bg-gray-200 px-6 py-4 font-bold text-lg">
          Latest Research
        </h1>
        <AutoScroll/>
      </div>
  </div>
  </>
  )
}
