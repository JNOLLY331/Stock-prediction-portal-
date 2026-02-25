import React from 'react'
import Button from './Button.jsx'                                  
const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <a className='navbar-brand text-light text-decoration-none'>
        Stock prediction portal
      </a>&nbs
      <div>
        <Button text="Register" class="btn-outline-info"/>&nbssp; 
        <Button text="login" class="btn-info"/>&nbssp;                      
      </div>
    </nav>
  )}                                

export default Header
