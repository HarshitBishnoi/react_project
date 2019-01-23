import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="#!" className="brand-logo"><i className="large material-icons">store</i>Traveloka</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/addressDetails'>Address Details</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar