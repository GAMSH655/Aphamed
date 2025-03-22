import React from 'react'
import Hero from "../../src/Components/Hero"
import Offer from "../../src/Components/Offer"
import Faqs from  "../../src/Components/Faqs"
import Feedback from "../../src/Components/Feedbacks"
import CounterSection from '../Others/Counter'
const Home = () => {
  return (
    <div className='"max-w-[1200px] m-auto"'>
      <Hero/>
      <Offer/>\
      <CounterSection/>
      <Faqs/>
      <Feedback/>
    </div>
  )
}

export default Home