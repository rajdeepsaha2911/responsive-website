import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For Better World</h1>
            <p>our Cutting-edge curriculam is designed to empower student with knowledge, skills and experiences needed to excel in the dynamic fiexd of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="dark-arrow" /></button>
        </div>
    </div>
  )
}

export default Hero