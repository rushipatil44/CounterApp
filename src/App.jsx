
import { useState } from 'react';
import './App.css'

import Raju from './assets/raju.jpg'
import HT from './assets/helloThere.jpg'
import Thala from './assets/thala.png'

import Bhavesh from './assets/snake.jpg'
import Shivdhan from './assets/blackdiamond.jpg'
import Soham from './assets/aap.jpg'
import TusharA from './assets/farfromhome.jpg'
import Abhay from './assets/congress.jpg'
import TusharM from './assets/classtopper.jpg'
import Kadam from './assets/valorant.jpg'


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
    if( add == 44){
      setImagePath(Bhavesh)
    }
    if( add == 40){
      setImagePath(Shivdhan)
    }
    if( add == 67){
      setImagePath(Soham)
    }
    if( add == 24){
      setImagePath(Kadam)
    }
    if( add == 35){
      setImagePath(Abhay)
    }
    if( add == 30){
      setImagePath(TusharM)
    }
    if( add == 5){
      setImagePath(TusharA)
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
    if(Counter == 45){
      setImagePath(Bhavesh)
    }
    if(Counter == 41){
      setImagePath(Shivdhan)
    }
    if( Counter == 68){
      setImagePath(Soham)
    }
    if(Counter == 25){
      setImagePath(Kadam)
    }
    if( Counter== 36){
      setImagePath(Abhay)
    }
    if(Counter == 31){
      setImagePath(TusharM)
    }
    if(Counter == 6){
      setImagePath(TusharA)
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
    if( Counter == 44){
      setImagePath(Bhavesh)
    }
    if(Counter == 40){
      setImagePath(Shivdhan)
    }
    if( Counter == 67){
      setImagePath(Soham)
    }
    if( Counter == 24){
      setImagePath(Kadam)
    }
    if(Counter == 35){
      setImagePath(Abhay)
    }
    if(Counter == 30){
      setImagePath(TusharM)
    }
    if(Counter == 5){
      setImagePath(TusharA)
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
