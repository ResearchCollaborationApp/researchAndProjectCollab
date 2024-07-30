import React from 'react'
import { NavLink } from 'react-router-dom'
import app_logo from '../../images/app_logo.jpeg'
export default function HomeNavigation() {
  return (
    <header className="bg-slate-50 sticky top-0 z-10">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <NavLink to= "/" className="block text-teal-600" >
                <span className="sr-only">Home</span>
                <img className="rounded max-h-12 w-auto lg:max-h-14" src={app_logo} alt="app-logo" />
                </NavLink>
            </div>
        <div className="flex items-center gap-4">
            <div className="flex gap-4">
                <NavLink 
                    to = "signin"
                    className={({ isActive }) =>
                        `rounded-md px-5 py-2.5 text-sm font-bold sm:text-xl ${isActive ? 'border-b-2  border-blue-600' : ''}`
                      }
                >
                Sign in 
                </NavLink>
            </div>
        </div>
        </div>
    </div>
</header>
  )
}
