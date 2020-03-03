import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function NavIndex() {
  return (
    <Nav>
      <ul className="nav">
        <li>
          <Link to="/" clasName="nav-link">
            Primeiro link
          </Link>
        </li>
      </ul>
      <div className="nav-brand">TEHEND</div>
      <ul>
        <li>
          <Link to="/login" className="side-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="side-link">
            Link 2
          </Link>
        </li>
        <li>
          <Link to="/" className="side-link">
            Link 3
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
