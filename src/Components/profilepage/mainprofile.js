import React from 'react';
import { EditIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Mainprofile() {
  //add contact info, edit icons in the profile card
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
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
            <div className="flex justify-center items-center text-xl leading-relaxed text-black mt-4">
              <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-blue-600" />
              <span>Northern Kentucky University</span>
              </div>
            <div className="flex justify-center items-center text-xl leading-relaxed text-black mt-4">
                <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 text-blue-600" />
              <span>Northern Kentucky University</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

