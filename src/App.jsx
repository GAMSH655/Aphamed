import React from 'react'
import Header from "../src/Components/Header"
import Hero from "../src/Components/Hero"
import Offer from "./Components/Offer"
import useLenis from './Others/useLenis'
import Scroll from './Components/Sroll'
import Faqs from  "../src/Components/Faqs"
import Feedback from "../src/Components/Feedbacks"
import Footer from "../src/Components/Footer"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
const App = () => {
  useLenis()
  return (
    <div className="max-w-[1200px] m-auto">
      <Scroll/>
      <Header/>
      <Hero/>
      <Offer/>
      <Faqs/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default App