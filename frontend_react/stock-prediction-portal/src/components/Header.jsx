import React from 'react'

const Header = () => {
  return (
     <>
    <nav className='navbar container pt-3 pb-3'> </nav>
    <a className='navbar-brand text-light' href="">Stock Prediction App</a>
    <div>
        <a className='btn btn-outline-info' href="">Login</a>
        &nbsp;
        <a className='btn btn-info' href="">Register</a>
    </div>
    </>
  )
}

export default Header

