import { useState } from 'react';
import app_logo from '../../images/app_logo.jpeg';
import { Link } from 'react-feather';
import Avvvatars from 'avvvatars-react'
export default function Navigation({user}) {
  console.log(user)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="pb-6 mb-4 bg-slate-300 lg:pb-0 w-full sticky top-0 z-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-15 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img className="rounded max-h-12 w-auto lg:max-h-14" src={app_logo} alt="app-logo" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg className={`${menuOpen ? 'hidden' : 'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg className={`${menuOpen ? 'block' : 'hidden'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a href="#" title="" className="text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home</a>
            <a href="#" title="" className="text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> My Collabs </a>
            <a href="#" title="" className="text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Top Research </a>
            <a href="#" title="" className="text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Latest Research </a>
            <span className=" flex-col items-center">
            <img src={user.image} className="h-12 w-15 rounded-full border-2 border-gray-300" alt="User Avatar" />
            </span>
          </div>
        </nav>
        {/* xs to lg */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden`}>
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a href="#" title="" className="inline-flex py-2 text-lg font-semibold transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
              <a href="#" title="" className="inline-flex py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> My Collabs </a>
              <a href="#" title="" className="inline-flex py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Top Research </a>
              <a href="#" title="" className="inline-flex py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Latest Research </a>
              <a href="#" title="" className="inline-flex py-2 text-lg font-semibold text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Me </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

