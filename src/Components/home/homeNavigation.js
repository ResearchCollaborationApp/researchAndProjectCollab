import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import app_logo from '../../images/app_logo.jpeg';

export default function HomeNavigation({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const signOut = () =>{
    console.log("signout clicked")
    window.open("http://localhost:4000/signout")
  }
  return (
    <header className="bg-slate-300 sticky top-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink to="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <img className="rounded max-h-12 w-auto lg:max-h-14" src={app_logo} alt="app-logo" />
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {!user ? (
                <NavLink 
                  to="signin"
                  className={({ isActive }) =>
                    `rounded-md px-5 py-2.5 text-sm font-bold sm:text-xl ${isActive ? 'border-b-2 border-blue-600' : ''}`
                  }
                >
                  Sign in 
                </NavLink>
              ) : (
                <div className="relative">
                  <div className="inline-flex items-center overflow-hidden ">
                    <button 
                      onClick={() => setIsOpen(!isOpen)} 
                    >
                      <img src={user.image} className="h-14 w-15 rounded-full border-2 border-gray-300" alt="User Avatar" />
                    </button>
                  </div>
                  {isOpen && (
                    <div
                      className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div className="p-2">
                        <div
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Signed in as
                        </div>
                        <div
                          className="block rounded-lg px-4 py-2 text-md font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-700 overflow-hidden overflow-wrap break-words"
                          role="menuitem"
                        >
                          {user.email}
                        </div>
                      </div>
                      <div className="p-2">
                          <button
                            onClick = {signOut}
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                            role="menuitem"
                          >
                            Sign out
                          </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

