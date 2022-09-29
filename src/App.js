import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Progress from './pages/Progress'
import Project from './pages/Project'
import Timeline from './pages/Timeline'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {< Home />} />
        <Route path='/progress' element = {< Progress />} />
        <Route path='/Projects' element = {< Project />} />
        <Route path='/timeline' element = {< Timeline />} />
      </Routes>
    </>
  )
}

export default App