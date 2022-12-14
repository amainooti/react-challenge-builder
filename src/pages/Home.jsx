import React from 'react';
import Navbar from '../components/Navbar';
import { useTypewriter, Cursor } from "react-simple-typewriter";



function Home() {
  const [text]  = useTypewriter({
    words: ["Welcome Wesley, are you ready", "to do work", "today?"],
    loop: {},
    typeSpeed: 120
  })


  return (
    <>
      <Navbar />
      <div className='mt-12 md:[400px] flex-col w-[400px] lg:w-[500px] h-[300px] bg-black justify-center align-middle rounded-md'>
        <h1 className='text-green-700 pt-20 m-5 italic font-mono'>
          <span className='text-green-700'>
          OTI@DESKTOP-UIU2960</span>
          <span className='text-pink-400'> MINGW64</span>
          <span className='text-yellow-400'> ~/OneDrive/Documents/Web dev/builder-tut/client</span> <span className='text-blue-500'>(main)</span>
        </h1>
        <code className='text-green-700 pt-20 m-5'>
          <span className='text-white'> $ {text}</span>
          <span className='text-green-700'> <Cursor cursorStyle='<' /> </span>
        </code>

      </div>
    </>
  )
}

export default Home