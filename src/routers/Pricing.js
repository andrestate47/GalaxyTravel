import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'


const Pricing = () => {
  return (
    <div>
        < Navbar />
        <HeroImage heading='PRICING.' text='Choose your trip.'/>
        <PricingCards/>
        <Footer />
    </div>
  )
}

export default Pricing