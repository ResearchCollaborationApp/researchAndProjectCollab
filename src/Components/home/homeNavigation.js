import React, { useContext, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import app_logo from "../../images/app_logo.jpeg";

export default function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signOut = async () => {
    console.log("signout clicked");

    try {
      // Send a GET request to the signout endpoint
      const response = await fetch("/signout", {
        method: "GET",
        credentials: "include", // Include cookies for session management
      });
      if (response) {
        console.log("user is signed out");
        props.setUser(null);
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-200 to-blue-200 sticky top-0 z-10 mb-3 border-b-2 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center justify-between h-20">
          {/* Logos and Sign In/Sign Out */}
          <NavLink to="/" className="block text-teal-600">
            <span className="sr-only">Home</span>
            <img
              className="rounded max-h-12 w-auto lg:max-h-14"
              src={app_logo}
              alt="app-logo"
            />
          </NavLink>
          {/* <button onClick={signOut}>Sign out</button> */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <svg
              className={`${menuOpen ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`${menuOpen ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:ml-auto lg:space-x-10`}
           >
            <NavLink
              to="/"
              className="text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to="mycollabs"
              className="text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
            >
              {" "}
              My Collabs{" "}
            </NavLink>
            <NavLink
              to="/top-research"
              className="text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
            >
              {" "}
              Top Research{" "}
            </NavLink>
            <NavLink
              to="/latest-research"
              className="text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
            >
              {" "}
              Latest Research{" "}
            </NavLink>
          </nav>

          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md`}
          >
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <NavLink
                  to="/"
                  className="inline-flex py-2 text-xl font-semibold transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Home{" "}
                </NavLink>
                <NavLink
                  to="/my-collabs"
                  className="inline-flex py-2 text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  My Collabs{" "}
                </NavLink>
                <NavLink
                  to="/top-research"
                  className="inline-flex py-2 text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Top Research{" "}
                </NavLink>
                <NavLink
                  to="/latest-research"
                  className="inline-flex py-2 text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Latest Research{" "}
                </NavLink>
                <NavLink
                  to="/me"
                  className="inline-flex py-2 text-xl font-semibold  transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Me{" "}
                </NavLink>
              </div>
            </div>
          </nav>
          <NavLink
            to="signin"
            className={({ isActive }) =>
              `rounded-md px-5 py-2.5 text-sm font-bold sm:text-xl ${
                isActive ? "border-b-2 border-indigo-500" : ""
              }`
            }
          >
            Sign in
          </NavLink>
          <div className="relative">
            <div className="inline-flex items-center overflow-hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {/* <img src="" className="h-14 w-15 rounded-full border-2 border-gray-300" alt="user_avatar" /> */}
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
                  ></div>
                </div>
                <div className="p-2">
                  <button
                    onClick={signOut}
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
