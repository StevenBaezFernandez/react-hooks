import React, { useState } from 'react';
import './App.css';


function App() {
  const [ counter, setCounter ] = useState(0);
  const [ squareVisibility, setSquareVisibility ] = useState(true);
  const [ inputValue, setInputValue ] = useState('steven');

  let handlerChange = (event)=>{
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Hello word!</h1>
        <span className='counter'>{counter}</span>
        
        <div className="wraper-btns">
          <button onClick={() => setCounter(prevState => prevState + 1)}>Increment</button>
          <button onClick={() => setCounter(prevState => prevState = 0)}>Reset</button>
          <button onClick={() => setCounter(prevState => prevState - 1)}>Decrement</button>
        </div>
        <div className={`${squareVisibility? 'active' : ''} block`}>Block</div>
        <button className='btn-toggle-squere' onClick={()=> setSquareVisibility(prevState => !prevState )}>Toggle square</button>

        <input 
        placeholder='enter something...' 
        id='something' 
        value={inputValue} 
        onChange={handlerChange}/>

        <span>{inputValue}</span>



      </div>
    </div>
  );
}

export default App;
