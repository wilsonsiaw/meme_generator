import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="A logo for the application" />
      <h1>MemeGenerator</h1>
    </div>
  )
}

export default Header
