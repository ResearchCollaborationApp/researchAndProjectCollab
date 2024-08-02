import React from 'react';
import FriendsAndMore from '../feedpage/friends_and_more';
import UserInfo from "./userInfo"
export default function Mainprofile() {
  //add contact info, edit icons in the profile card
  return (
    <div className="grid grid-cols-1 gap-2 md:col-span-2 lg:grid-cols-4 p-5">
        <UserInfo/>
      <div className="h-fit lg:col-span-2 items-center description">
        <div className = "grid grid-cols-1 gap-4">
          <div className=" border-gray-300 bg-slate-100 rounded p-4 shadow-md sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div>
                <h1
                  className=" text-xl font-semibold text-black"
                >
                  Research Experience
                </h1>
                <div> 
                  <h3 className="mt-3">
                    <a href="#" className="hover:underline"> Some Interesting Podcast Title </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit
                    rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas
                    exercitationem facere aliquid fuga. Sint.
                  </p>

                  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                      Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                      <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                      <a href="#" className="underline hover:text-gray-700">August</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>

          <div className=" border-gray-300 bg-slate-100 rounded p-4 shadow-md sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div>
                <h1
                  className="  text-xl font-semibold text-black"
                >
                  Skills
                </h1>
                <div> 
                <h3 className="mt-4 text-lg sm:text-xl">
                  <a href="#" className="hover:underline"> Some Interesting Podcast Title </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit
                  rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                  <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                    <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                    <a href="#" className="underline hover:text-gray-700">August</a>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>

          <div className=" border-gray-300 bg-slate-100 rounded p-4 shadow-md sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div>
                <h1
                  className="  text-xl font-semibold text-black"
                >
                  Interests
                </h1>
                <div> 
                <h3 className="mt-4 text-lg sm:text-xl">
                  <a href="#" className="hover:underline"> Some Interesting Podcast Title </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit
                  rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                  <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                    <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                    <a href="#" className="underline hover:text-gray-700">August</a>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
      <div className="h-fit items-center  rounded  friends and more">
        <FriendsAndMore/>
      </div>
    </div>
  );
}

