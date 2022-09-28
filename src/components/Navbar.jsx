import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Progress  from "../pages/Progress";
import  Project  from "../pages/Project";
import Timeline  from "../pages/Timeline";

function Navbar() {
  return (
      <Router>
          <div className='md:w-[100%] h-14 '>
              <nav className='w-auto h-auto flex justify-around align-middle'>
                  <div>
                      <h1 className='text-[#21272F] mt-3'><code className='bg-red-400 p-2 text-white before:content-["<"] after:content-["/>"] '>Zero dulling </code></h1>
                  </div>
                  <ul className='md:flex justify-around align-middle gap-6 mt-3 hidden'>
                      <li className='text-[#21272F] capitalize'><a href= "/">Home</a></li>
                      <li className='text-[#21272F] capitalize'><Link to= "/projects">Projects</Link></li>
                      <li className='text-[#21272F] capitalize'><Link to= "/progress"> Progress </Link></li>
                      <li className='text-[#21272F] capitalize'><Link to= "/timeline"> Timeline </Link></li>
                  </ul>
              </nav>
          </div>
          <Routes>
=              <Route exact path='/projects' element={< Project />}></Route>
              <Route exact path='/progress' element={< Progress />}></Route>
              <Route exact path='/timeline' element={< Timeline />}></Route>
          </Routes>

      </Router>
  )
}

export default Navbar