import React from 'react';
import { GlobeIcon } from '../../Icons';

function UserPostTitle() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4  pb-4 mb-1">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-medium text-gray-800">Claire Mac</h3>
          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <div className="flex items-center">
                  <div className="text-lg font-medium text-gray-500">Computer Science</div>
                  <span className="flex ml-6">
                    <GlobeIcon/>
                  </span>
                  <span className="ml-1 flex text-gray-500 items-center">
                    4h
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
