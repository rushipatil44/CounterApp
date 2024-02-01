
import { useState } from 'react';
import './App.css'

import Raju from './assets/raju.jpg'
import HT from './assets/helloThere.jpg'
import Thala from './assets/thala.png'

function App() {
  let [Counter, setCount] = useState(10)
  let value;
  let [imagePath, setImagePath] = useState(HT);
  let r;


  const addCount = () =>{
    let add = Counter +1;
    setCount(add);
    if(add  > 0){
      setImagePath(HT)
    }
    if( add == 7){
      setImagePath(Thala)
    }
  }
  const removeCount = () =>{
    if(Counter>1){
      setCount(Counter-1);
      setImagePath(HT)
    }
    else if(Counter == 1){
      setCount(0)
      setImagePath(Raju)
    }
    if(Counter == 8){
      setImagePath(Thala)
    }
  }
  const handleChange = (e) =>{
    Counter = Number(e.target.value);
    if(Counter == ''){
      setCount(0)
    }else{
      setCount(Counter);
    }
    
    if(Counter == 0){
      setImagePath(Raju)
    }else if(Counter == 7){
      setImagePath(Thala)
    }
    else{
      setImagePath(HT)
    }
    // e.target.value = ''
  }
  const inputStyle = {
    width: '100px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    fontSize: '16px',
  };
  return (
    <>
    <h1>Welcome to Counter App : {Counter}</h1>
    <img src={imagePath} alt="Description of the image" width="65%" style={{marginBottom:"15px"}}/>
    <br/>
    <button style={{marginRight:"10px",marginBottom:"20px"}} onClick={addCount}>Increase</button>
    <button style={{marginLeft:"10px",marginBottom:"20px",marginRight:"20px"}} onClick={removeCount}>Decrease</button>
    <input
        type="number"
        style={inputStyle}
        placeholder="Your fav no."
        value={value}
        onChange={handleChange}
      />
    </>
    

  )
}

export default App
