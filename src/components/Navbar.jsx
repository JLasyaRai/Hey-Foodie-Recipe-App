import React from 'react'
import smiley from '../assets/images/smiley.jpg';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  const linkclass = ({isActive})=> isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  return (
    <nav className="bg-gray-600 border-b border-indigo-100">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-14 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          {/* <!-- Logo --> */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              className="h-8 w-auto rounded-full"
              src={smiley}
              alt="React Jobs"
            /> 
            <span className="hidden md:block text-white text-xl font-bold ml-2"
              >Hey Foodieeess!!!</span
            >
          </NavLink>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink
                to="/"
                className={linkclass}
                >Home</NavLink>
              
              <NavLink
                to="/recipes"
                className={linkclass}
                >Recipes</NavLink>
              
              <NavLink
                to="/add-recipe"
                className={linkclass}
                >Add Recipes</NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default navbar
