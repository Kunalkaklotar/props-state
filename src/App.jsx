
import './App.css';
import React, { useState } from 'react';
import Butrton from './Butrton';
function App() {
  let [state,setState]=useState();
  const clear = () => {
    setState("")
  }
  return (
    <>
      <input type="text" onChange={(event)=>setState(event.target.value)} />
      <Butrton clear = {clear} />
      <h1>{state}</h1>
    </>
  );
}

export default App;
