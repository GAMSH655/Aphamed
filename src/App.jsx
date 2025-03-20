import React from 'react'
import Header from "../src/Components/Header"
import Hero from "../src/Components/Hero"
import Offer from "./Components/Offer"
import useLenis from './Others/useLenis'
import Scroll from './Components/Sroll'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
const App = () => {
  useLenis()
  return (
    <div>
      <Scroll/>
      <Header/>
      <Hero/>
      <Offer/>
    </div>
  )
}

export default App