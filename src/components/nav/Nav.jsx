import React from 'react'
import './nav.css'
import {FaHome, FaUserCircle, FaBookOpen, FaPhoneAlt} from 'react-icons/fa'
import {MdAppSettingsAlt} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" /*onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}*/><FaHome /></a>      
      <a href="#about" /*onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}*/><FaUserCircle /></a>
      <a href="#experience" /*onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}*/><FaBookOpen /></a>
      <a href="#services" /*onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}*/><RiServiceFill /></a>
      <a href="#portfolio" /*onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}*/><MdAppSettingsAlt /></a>
      <a href="#contact" /*onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}*/><FaPhoneAlt /></a>
    </nav>
  )
}

export default Nav