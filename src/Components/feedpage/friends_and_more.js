import React from 'react'
import '../profilepage/profile.css'
export default function FriendsAndMore() {
  return (
    <>
    {/* Profile Link */}
  <div>
    <div
      className="mb-8 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
    >
      <header>
        <h3 className="mt-0.5 text-2xl mb-2 font-medium text-gray-900">
         Profile link
        </h3>
      </header>
      <hr className="border-t border-gray-300 mt-2"/> 
      <p className="mt-2 line-clamp-3 text-xm/relaxed text-gray-500">
       add the profile link here...
      </p>
    </div>
{/* Students in school */}
  <div
    className="mb-8 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <header>
      <h3 className="mt-0.5 text-2xl mb-2 font-medium text-gray-900">
       Students in school
      </h3>
    </header>
    <hr className="border-t border-gray-300 mt-2"/> 
      <div className="bg-white p-4">
        <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-1 last:border-b-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="size-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-medium text-gray-800">Claire Mac</h3>
            <div className="flow-root">
              <ul className="-m-1 flex flex-wrap">
                <li className="p-1 leading-none">
                  <a href="#" className="text-xm font-medium text-gray-500">Computer Science </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
{/* People you may know */}
  <div
    className="mb-8 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <header>
      <h3 className="mt-0.5 text-2xl mb-1 font-medium text-gray-900">
      People you may know
      </h3>
    </header>
    <hr className="border-t border-gray-300 mt-2"/> 
    <div className="bg-white p-4">
        <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-1 last:border-b-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="size-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-medium text-gray-800">Claire Mac</h3>
            <div className="flow-root">
              <ul className="m-1 flex flex-wrap">
                <li className="p-1 leading-none">
                  <a href="#" className="text-xm font-medium text-gray-500">Computer Science </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
    </>
  )
}
