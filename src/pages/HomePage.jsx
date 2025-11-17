import React from 'react'
import Navigation from '../components/Navigation.jsx';
import HeroImage from '../components/HeroImage.jsx';
import Service from '../components/Service.jsx';
import About from '../components/About.jsx';
import Testimonial from '../components/Testimonial.jsx';

const HomePage = () => {
  return (
    <>
    
    <Navigation/>
    <HeroImage/>
    <Service/>
    <About/>
    <Testimonial/>

    </>
  )
}

export default HomePage