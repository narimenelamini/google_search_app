import React from 'react'
import  {Link } from 'react-router-dom'
import {Search} from './Search'

export const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b  border-gray-200 ">
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
                  <div>
                  <p className='text-2xl'>Google</p>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
            </Link>
          
        </div>
        <Search />
    </div>
  )
}
