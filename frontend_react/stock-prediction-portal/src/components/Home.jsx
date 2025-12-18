import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

const Home = () => {
  return (
   <>
    <div className='container mt-5'>
      <div className='p-5 text-center bg-light-dark rounded'> 
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>Welcome to the Stock Prediction Portal! Here, you can predict future stock prices using advanced machine learning models.</p>
          <Link className='btn btn-outline-info' to='/login'>Login</Link>
      </div>
    </div>
   </>
  )
}

export default Home
