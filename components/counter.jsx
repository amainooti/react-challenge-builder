import React, {useState} from 'react';
import './App.css';

function App() {
  
  let[initialnum, number] = useState(0);
  let numIncrease = () => {
    number((initialnum += 1));
  };

  let numDecrease = () => {
    number((initialnum -= 1))
  }

  let reset = () => {
    number((0))
  }
  return (
    <div>
      <h1 className='number'>{initialnum}</h1>
      <div className="all-buttons">
      <button onClick = {numDecrease} className="decrease">decrease</button>
      <button onClick = {reset} className="reset">reset</button>
      <button onClick = {numIncrease} className="increase">increase</button>
      
      </div>
      
    </div>
    )
}
export default App;
