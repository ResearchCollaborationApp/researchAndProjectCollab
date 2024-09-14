import React from "react";
import FriendsAndMore from "../feedpage/friends_and_more";
import UserInfo from "./userInfo";
export default function UserProfile() {
  let user = {
    userId: "userId",
    firstName: "Bhuwan",
    lastName: "Bhandari",
    email: "bhuwanbhandari2821@gmail.com",
    imageLink:
      "https://lh3.googleusercontent.com/a/ACg8ocJ8AYU8vRZGPRExKGIVt84zJIj49BsJ2r5pjPeYjE_wXT-y-gO1=s96-c",
    address: "Cold Spring, KY",
    major: "Computer Science",
    openToCollaboration: true,
  };
  let userAssets = {
    emptyExperience: [],
    experience: [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        startDate: "January 2022",
        endDate: "Present",
        description: "Worked on various software development projects.",
        outcomes: "Improved application performance by 20%.",
      },
      {
        title: "Software Engineer",
        company: "Tech Corp",
        startDate: "January 2022",
        endDate: "Present",
        description: "Worked on various software development projects.",
        outcomes: "Improved application performance by 20%.",
      },
      // Add more experience objects here
    ],
    skills: ["React", "JS", "Java"],
    interests: [],
  };
  //add contact info, edit icons in the profile card
  return (
    <div className="grid grid-cols-1 gap-2 md:col-span-2 lg:grid-cols-4 p-5">
      <UserInfo />
      <div className="h-fit lg:col-span-2 items-center description">
        <div className="grid grid-cols-1 gap-4">
          <div className=" border-gray-300 bg-slate-100 rounded p-4 shadow-md sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold text-black">
                Experience
              </span>
              {userAssets.experience.length > 0 ? (
                <div className="divide-y-2 divide-gray-300">
                  {userAssets.experience.map((item, index) => (
                    <div key={index} className=" mb-6">
                      <div className="mt-3 flex justify-between">
                        <span className=" text-xl font-semibold text-black">
                          {item.title}
                        </span>
                        <span>{item.company}</span>
                      </div>
                      <div>
                        <p className="mt-1 text-sm text-gray-700">
                          {item.description}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          {item.outcomes}
                        </p>
                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                          <div className="mt-2 sm:flex sm:gap-2 text-xs font-medium text-gray-500 sm:mt-0">
                            <span className="hover:text-gray-700">
                              {item.startDate}
                            </span>
                            <span>to</span>
                            <span className="hover:text-gray-700">
                              {item.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-1 text-sm text-gray-700">
                  You haven't added any experience
                </p>
              )}
            </div>
            <button
              className="mt-3 bg-gray-200 rounded-full p-2 text-lg font-semibold"
              title="Add Experience"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <div className=" border-gray-300 bg-slate-100 rounded p-4 shadow-md sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4">
              <div class="flex justify-between">
                <span className="text-xl font-semibold text-black">
                  Skills and Interests
                </span>
              </div>
              {userAssets.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {userAssets.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-700">Add your skills here</p>
              )}
            </div>
            <button
              className="mt-3 bg-gray-200 rounded-full p-2 text-lg font-semibold"
              title="Add Skills and Interests"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit items-center  rounded  friends and more">
        <FriendsAndMore />
      </div>
    </div>
  );
}
