import React from 'react'
import { Link } from "react-router-dom";
import Modal from './Modal';
import Togglebutton from './Togglebutton';

function Navbar() {
    const [option, setOption] = React.useState(false);

    const optionPanel = option && <Modal />

    const handleOption = () => {
        setOption( prevState => !prevState )
    }


  return (

          <div className='md:w-[100%] h-14 '>
              <nav className='w-auto gap-12 h-auto flex justify-around align-middle'>
                  <div>
                  <h1 className='text-[#21272F] mt-3'><code className='bg-green-700 p-2 text-white before:content-["<"] after:content-["/>"] cursor-pointer' onClick={handleOption}>Zero dulling </code></h1>
                  {optionPanel}
                  </div>
                  <ul className='md:flex justify-around align-middle gap-6 mt-3 hidden'>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><a href= "/">Home</a></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/projects">Projects</Link></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/progress"> Progress </Link></li>
                      <li className='text-[#21272F] capitalize hover:border-b-2 border-red-500 '><Link to= "/timeline"> Timeline </Link></li>
              </ul>
              <Togglebutton />
          </nav>

          </div>


  )
}

export default Navbar