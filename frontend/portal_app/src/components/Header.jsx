import React from 'react'
import Button from './Button.jsx'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <Link to="/" className='navbar-brand text-light text-decoration-none'>
        Stock prediction portal
      </Link>&nbs
      <div>
        <Button text="Register" class="btn btn-outline-info" url="/register"/>&nbssp; 
        <Button text="login" class="btn btn-info" url="login"/>&nbssp;                      
      </div>
    </nav>
  )}                                

export default Header
