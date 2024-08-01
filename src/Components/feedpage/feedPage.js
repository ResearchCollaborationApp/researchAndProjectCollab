import Navigation from "../navbar/navigation"
import ScrollingFeed from "./scrollingfeed/scrollingFeed"
export default function FeedPage() {
  return (
    <>
    <Navigation/>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-4 lg:gap-8 lg:mx-8 px-8">
      <div className="h-fit bg-gray-300 hidden lg:block md:block">
        User's profile will display here
      </div>
      <div className="h-fit lg:col-span-2">
        <ScrollingFeed/>
      </div>
      <div className="h-fit bg-gray-300 hidden lg:block md:block">
      </div>
  </div>
  </>
  )
}
