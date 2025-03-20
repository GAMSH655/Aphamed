import React from 'react'
import Header from "../src/Components/Header"
import Hero from "../src/Components/Hero"
import useLenis from './Others/useLenis'
const App = () => {
  useLenis()
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App