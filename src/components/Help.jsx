import React from 'react'

function Help() {
  return (
      <div>
          <h1 className={` `}>{}</h1>
            <div className='flex gap-4 justify-center align-middle'>
            <button className='rounded-md border-solid border-2 border-indigo-600 p-2 w-24' onClick={handleIncrease}>increase </button>
            <button className='rounded-md border-solid border-2 border-indigo-600 p-2 w-24' onClick={handleDecrease}>decrease</button>
            <button className='rounded-md border-solid border-2 border-indigo-600 p-2 w-24' onClick={reset}>reset</button>
            </div>
    </div>
  )
}

export default Help