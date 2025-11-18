import React from 'react'
import Navigation from '../components/Navigation.jsx';
import HeroImage from '../components/HeroImage.jsx';
import Service from '../components/Service.jsx';
import About from '../components/About.jsx';
import Testimonial from '../components/Testimonial.jsx';
import { Element } from "react-scroll";
import Contact from '../components/Contact.jsx';


const HomePage = () => {
  return (
    <>
    <Element name='home'>
    <Navigation/>
    <HeroImage/>
    <Service/>
    <About/>
    <Testimonial/>
    <Contact/>

    </Element>

    </>
  )
}

export default HomePage