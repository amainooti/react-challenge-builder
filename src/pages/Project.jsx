import React from 'react'
import Navbar from '../components/Navbar'
import ProjectOne from '../components/ProjectOne'
import Projecttwo from '../components/Projecttwo'

function Project() {
  return (
    <div className='w-[100%] h-[100vh]'>
      <Navbar />
      <ProjectOne />
      <Projecttwo />
    </div>
  )
}

export default Project