import React from 'react'
import { FaHashtag, FaUsers, FaBell, FaUser } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";


function Projecttwo() {
  return (
      <main className='bg-gray-400 mt-12 border-b-8'>
      <nav className='
                flex
                flex-col
                pt-8
                gap-6
                w-[20%]
                h-[100vh]
                bg-gray-400
                border-gray-700
                border-[1px]
      '>
        <li className='list-none self-center'><Link><BiHomeCircle  style={{fontSize: "22px",}}  /></Link></li>
        <li className='list-none self-center'><Link><FaHashtag   style={{fontSize: "22px"}}  /></Link></li>
        <li className='list-none self-center'><Link><FaUsers   style={{fontSize: "22px"}} /></Link></li>
        <li className='list-none self-center'><Link><FaBell   style={{fontSize: "22px"}} /></Link></li>
        <li className='list-none self-center'><Link><GrMail  style={{fontSize: "22px"}} /></Link></li>
        <li className='list-none self-center'><Link><FaUser  style={{fontSize: "22px"}} /></Link></li>
        <li className='list-none self-center'><Link><HiDotsCircleHorizontal  style={{fontSize: "22px"}} /></Link></li>
      </nav>
    </main>
  )
}

export default Projecttwo;