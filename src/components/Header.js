import React from 'react';
import Link from './Link.js';
import './RouteOptions.css';

const Header = () => {
  return (
    <div className="list-container">
      <Link href="/" className="list-item">
        Accordion
      </Link>
      <Link href="/list" className="list-item">
        Search
      </Link>
      <Link href="/dropdown" className="list-item">
        Dropdown
      </Link>
      <Link href="/translate" className="list-item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
