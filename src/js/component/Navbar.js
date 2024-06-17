import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 font-monospace" href="#">Elite Cars</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <a className="nav-link fs-4" href="#"><FontAwesomeIcon icon = {faCartShopping} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;