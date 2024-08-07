import Navigation from "../navbar/navigation"
import UserInfo from "../profilepage/userInfo"
import AutoScroll from "./autoScroll"
import ScrollingFeed from "./scrollingfeed/scrollingFeed"
import TopResearch from "./topResearch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ModalHandler from "../assets/modals"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
export default function FeedPage() {
  const [open, setOpen] = useState(false)
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
        <div className = "flex-col border rounded-md items-center h-fit w-full bg-white mb-4 ">
          <div className="flex items-center gap-4 py-1 px-3">
            <img
            alt=""
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="w-10 h-10 items-center rounded-full object-cover"
          />
            <button 
            onClick={() => setOpen(true)}
            className = "text-left font-medium ml-3 my-3 w-2/3 h-fit p-3 bg-gray-200 border rounded-3xl border-slate-300">
              Share something...
            </button>
            <FontAwesomeIcon icon={faPlus} className="size-6 "/>
          </div>
          <ModalHandler open={open} onClose={() => setOpen(false)}>
            <div className="text-center w-56">
              <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <form action="#" class="space-y-4">
                    <div>
                      <label class="sr-only" for="message">Message</label>
                      <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="What do you want to talk?"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div>
                    <div class="mt-4">
                      <button
                        type="submit"
                        class="inline-block w-full rounded-lg bg-slate-600 px-5 py-3 font-medium text-white sm:w-auto"
                      >
                      Post
                      </button>
                    </div>
                  </form>
       
            </div>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-danger w-full">Delete</button>
                <button
                  className="btn btn-light w-full"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
         </ModalHandler>
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
