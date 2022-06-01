import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">BAND NAME</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">LINK 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">LINK 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;