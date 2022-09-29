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
      <div className='mt-12 flex-col w-[500px] h-[300px] bg-black justify-center align-middle rounded-md'>
        <h1 className='text-green-700 pt-20 m-5 italic font-mono'>
        <span className='text-green-700'>OTI@DESKTOP-UIU2960</span><span className='text-pink-400'> MINGW64</span> <span className='text-yellow-400'>~/OneDrive/Documents/Web dev/builder-tut/client</span> <span className='text-blue-500'>(main)</span>
        </h1>
        <code className='text-green-700 pt-20 m-5'>
          <span className='text-green-700'> $ {text}</span>
          <span className='text-white'> <Cursor cursorStyle='<' /> </span>
        </code>

      </div>
    </>
  )
}

export default Home