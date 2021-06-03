import React from 'react';
import { Link } from 'react-router-dom';
import './RouteOptions.css';

const Header = () => {
  return (
    <div className="list-container">
      <Link to="/" className="list-item">
        Accordion
      </Link>
      <Link to="/list" className="list-item">
        Search
      </Link>
      <Link to="/dropdown" className="list-item">
        Dropdown
      </Link>
      <Link to="/translate" className="list-item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
