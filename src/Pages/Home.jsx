import React from 'react'
import Hero from "../../src/Components/Hero"
import Offer from "../../src/Components/Offer"
import Faqs from  "../../src/Components/Faqs"
import Feedback from "../../src/Components/Feedbacks"
import DisplayProduct from '../Components/DisplayProduct'
// import CounterSection from '../Others/Counter'
const Home = () => {
  return (
    <div className='"max-w-[1200px] m-auto"'>
      <Hero/>
      <Offer/>\
      <DisplayProduct/>
      <Faqs/>
      <Feedback/>
    </div>
  )
}

export default Home