import { useState } from 'react'

import './App.css'
import BackGround from './Components/BackGround/BackGround';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';

function App() {
  
    let heroData = [
      
         {text1:"Dive into", text2:"what you love"},
        {text1:"Indulge" ,text2:"your passion"},
        {text1:"Give in to" ,text2:"your passion"},
      
    ]

    const [heroCount,setHeroCount]=useState(1);  //to change the bg img
    const [playStatus,setplayStatus]=useState(true);    //for video

  return (
    <div>

  
  <BackGround playStatus={playStatus} heroCount={heroCount}/>
  <NavBar/>
  <Hero setplayStatus={setplayStatus}
   setHeroCount={setHeroCount}
   heroCount={heroCount}
  playStatus={playStatus}
   heroData={heroData[heroCount]}
  
  
  />
  </div>
  )
}

export default App
