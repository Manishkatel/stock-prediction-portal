import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <nav className="navbar  m-t-2">
      <div className="container d-flex align-items-center">
        
        {/* Left side: Brand */}
        <a className="navbar-brand" href="#">
          Stock Prediction App 
        </a>
        {/* Right side: Buttons */}
        <div className="ms-auto">
          <Button text="Login" class="btn-outline-info" />
          &nbsp;
          <Button text="Register" class="btn-info" />
        </div>

      </div>
    </nav>
  );
};

export default Header;


