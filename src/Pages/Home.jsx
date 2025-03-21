import React from 'react'
import Header from "../../src/Components/Header"
import Hero from "../../src/Components/Hero"
import Offer from "../../src/Components/Offer"
import useLenis from "../../src/Others/useLenis"
import Scroll from '../../src/Components/Sroll'
import Faqs from  "../../src/Components/Faqs"
import Feedback from "../../src/Components/Feedbacks"
import Footer from "../../src/Components/Footer"
const Home = () => {
    useLenis()
  return (
    <div className='"max-w-[1200px] m-auto"'>
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

export default Home