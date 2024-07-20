import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import About from '../Components/About'
import Services from '../Components/Services'
import Blog from '../Components/Blog'
import Presentation from '../Components/Presentation'
import ExecutiveComition from '../Components/ExecutiveComition'
import Footer from '../Components/Footer'
import ClientsSlider from '../Components/ClientsSlider'
import Achivements from '../Components/Achivements'
import Testimonials from '../Components/Testimonials'

function Home() { 
  return (
    <div>
        <Navbar />
        <Header />
        <Achivements />
        <Blog />
        <Services /> 
        <Testimonials />
        <ExecutiveComition />
        <ClientsSlider />
        <Footer />
    </div>
  )
}

export default Home