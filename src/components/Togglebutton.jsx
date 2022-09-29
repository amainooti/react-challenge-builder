import React from 'react'

function Togglebutton() {
    const [clicked, setClicked] = React.useState(false);

    const move = clicked ? "translate-x-3 duration-150" : "left-0 duration-150";

    const handleClick = () => {
    setClicked(prevState => !prevState)
    }


  return (
      <div onClick={handleClick} className='bg-green-700 relative h-5 w-12 mt-2 rounded-lg border-2 p-3 border-gray-300'>
          <div className= {`rounded-full h-5 w-5 ${move} top-0.5 bg-white absolute`}></div>
    </div>
  )
}

export default Togglebutton