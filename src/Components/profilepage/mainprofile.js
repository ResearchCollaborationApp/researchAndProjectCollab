import React from 'react'
export default function Mainprofile() {
  //add contact info, edit icons in the profile card
  return (
        <div className="container mx-auto p-4 border-2 rounded-lg border-gray-100 bg-white">
          <div className="relative">
            <img
              src="https://media.sproutsocial.com/uploads/1c_facebook-cover-photo_clean@2x.png"
              alt="coverphoto"
              className="h-full w-full rounded-t-lg object-cover sm:h-80 lg:h-96"
            />
            <div className="absolute inset-x-0 top-48 sm:top-56 lg:top-64 flex justify-center">
              <img
                src="https://img.freepik.com/free-photo/closeup-shot-beautiful-bald-eagle-with-blurred-background_181624-2767.jpg?t=st=1719243095~exp=1719246695~hmac=18a2f4ff487b812cb376855ef7e327e87316ea78265ab9cbbdf88a81a0e003d3&w=900"
                alt="profilephoto"
                className="w-24 h-24 rounded-full border-2 border-gray-300 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <ul className="text-center space-y-2">
              <li className="text-base text-gray-900 sm:text-lg lg:text-xl">Bhuwan Bhandari</li>
              <li className="text-base text-gray-900 sm:text-lg lg:text-xl">Junior Computer Science</li>
              <li className="text-base text-gray-900 sm:text-lg lg:text-xl">Cold Spring, KY</li>
              <li className="text-base text-gray-900 sm:text-lg lg:text-xl">More</li>
            </ul>
          </div>
        </div>

  )
}
