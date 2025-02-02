import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/program/Program'
import Title from './component/title/Title'
import About from './component/about/About'
import Campus from './component/campus/Campus'
import Testimonial from './component/testimonials/Testimonial'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Videoplayer from './component/videoplayer/Videoplayer'



const App = () => {

  const [playstate ,setplaystate]=useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What we offer'></Title>
        <Program/>
        <About setplaystate={setplaystate}></About>
        <Title subtitle='Gallery' title='Campus photos'></Title>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'></Title>
        <Testimonial/>
        <Title subtitle='Contact Us ' title='Get in Touch'></Title>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App
