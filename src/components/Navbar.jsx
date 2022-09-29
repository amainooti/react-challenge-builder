import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (

          <div className='md:w-[100%] h-14 '>
              <nav className='w-auto h-auto flex justify-around align-middle'>

                  <ul className='md:flex justify-around align-middle gap-6 mt-3 hidden'>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><a href= "/">Home</a></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/projects">Projects</Link></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/progress"> Progress </Link></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/timeline"> Timeline </Link></li>
                  </ul>
              </nav>
          </div>


  )
}

export default Navbar