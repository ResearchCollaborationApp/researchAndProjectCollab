import React from 'react';
import { GlobeIcon } from '../../Icons';

function UserPostTitle() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 pb-2 mb-1">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-grow">
          <div className="flex items-center  flex-wrap lg:flex-nowrap">
            <h3 className="text-lg font-bold text-gray-800">Claire Mac</h3>
            <span className="hiddden md:block lg:block h-full w-px mx-2">|</span>
            <div className="lg:block text-lg font-medium text-gray-500">Computer Science</div>
          </div>
          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <div className="flex-col items-center">
                <div className="hidden lg:block md:block text-lg text-gray-700">Northern Kentucky University</div>
                  <span className="ml-1 flex text-gray-500 items-center">
                    Aug 18
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPostTitle;
