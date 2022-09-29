import React from 'react'

function ProjectOne() {
    const [counter, setCounter] = React.useState(0);
    let color;

    if (counter < 0) {
      color = "text-red-600 text-4xl"
    }
    else if (counter > 0) {
      color = "text-green-600 text-4xl"
    }
    else {
      color = "text-gray-600 text-4xl"
    }
    const handleIncrease = () => {
      setCounter(prevState => prevState + 1);
    }

    const handleDecrease = () => {
      setCounter(prevState => prevState - 1);
    }

    const reset = () => {
      setCounter(0);
    }
  return (
      <div>
          <div className=' mt-12  w-[100%] flex flex-col  justify-center align-middle text-center'>
      <h1 className={` ${color} mb-5 p-12` }>{counter}</h1>
      <div className='flex gap-4 justify-center align-middle'>
        <button className='rounded-md text-white uppercase bg-green-500 border-solid border-2 p-2 w-24' onClick={handleIncrease}>increase </button>
        <button className='rounded-md border-solid uppercase border-2 p-2 w-24' onClick={reset}>reset</button>
        <button className='rounded-md border-solid uppercase border-2 text-white bg-red-500 p-2 w-24' onClick={handleDecrease}>decrease</button>
      </div>
      </div>
    </div>
  )
}

export default ProjectOne