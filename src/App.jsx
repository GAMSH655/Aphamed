import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Services from "./Pages/Services"
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer"
import Scroll from './Components/Sroll'
import useLenis from "./Others/useLenis"
import CardDetails from "./Pages/CardDetails";
import WedDetails from "./Pages/WedDetails";
const App = () => {
  useLenis()
  return (
    <BrowserRouter>
      <Header />
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cardDetails/:slug" element={<CardDetails/>}/>
        <Route path="/WedDetails/:slug" element={<WedDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
