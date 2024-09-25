import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const [darkModeColor, setDarkModeColor] = useState('default');

  const handleColorChange = (event) => {
    setDarkModeColor(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abouttext}</Link>
            </li>             
          </ul>
          <div className={`form-check form-switch`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              onClick={props.toggleMode} 
              role="switch" 
              id="flexSwitchCheckDefault"
              checked={props.mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
          {props.mode === 'dark' && (
            <div className="dropdown mt-2">
              <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Choose Dark Mode Color
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#" onClick={() => handleColorChange({ target: { value: '#333' } })}>Dark Gray</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleColorChange({ target: { value: '#000' } })}>Black</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleColorChange({ target: { value: '#2c3e50' } })}>Midnight Blue</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
