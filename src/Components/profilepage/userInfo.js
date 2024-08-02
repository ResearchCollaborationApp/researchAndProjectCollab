import React from 'react'
import { EditIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function UserInfo() {
  return (
    <div className="text-center p-4 h-fit bg-slate-100 shadow-md rounded profile">
          <img className="object-cover w-32 h-32 mx-auto rounded-full border-white" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt="Profile" />
          <ul className="mt-5 space-y-1">
            <li className="text-lg font-semibold text-black">Mark Tanker</li>
            <li className="text-lg font-medium text-black">Junior, Computer Science</li>
            <li className="text-lg font-medium text-black">Cold Spring, KY</li>
          </ul>
          <button className= "text-slate-700 p-1">
            <EditIcon/>
          </button>
          <div className="max-w-xl mx-auto mt-7">
            <div className="flex justify-center items-center leading-relaxed text-black mt-4">
              <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-blue-600" />
              <span className="text-lg">Northern Kentucky University</span>
              </div>
            <div className="flex justify-center items-center leading-relaxed text-black mt-4">
                <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-blue-600" />
              <span className="text-lg">Northern Kentucky University</span>
            </div>
          </div>
        </div>
  )
}

export default UserInfo
