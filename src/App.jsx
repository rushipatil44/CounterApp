
import { useState } from 'react';
import './App.css'

function App() {
  let [Counter, setCount] = useState(10)
  const addCount = () =>{
    setCount(Counter+1);
  }
  const removeCount = () =>{
    if(Counter>0){
      setCount(Counter-1);
    }
  }
  return (
    <>
    <h1>Welcome to Counter App : {Counter}</h1>
    <button style={{margin:"20px"}} onClick={addCount}>Increase</button>
    <button onClick={removeCount}>Decrease</button>
    </>

  )
}

export default App
