import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>S Events</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
	  <li><Link to="/events">Events</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/add-event">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
