import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/program/Program'
import Title from './component/title/Title'
import About from './component/about/About'
import Campus from './component/campus/Campus'
import Testimonial from './component/testimonials/Testimonial'
import Contact from './component/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What we offer'></Title>
        <Program/>
        <About></About>
        <Title subtitle='Gallery' title='Campus photos'></Title>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'></Title>
        <Testimonial/>
        <Title subtitle='Contact Us ' title='Get in Touch'></Title>
        <Contact/>
      </div>
    </div>
  )
}

export default App
