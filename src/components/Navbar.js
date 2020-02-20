import React, {useContext, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './Navbar.css';


const Navbar = (props) => {
  const {isLight, toggleLight} = useContext(ThemeContext);
  const navbarClass = isLight ? 'navbar-light bg-lightgrey' : 'navbar-dark bg-dark';
  const colorButton = isLight ? 'Dark Mode' : 'Light Mode';

  useEffect(() =>{
    if (localStorage.getItem('isLight')){
      const light = JSON.parse(localStorage.getItem('isLight'))
      toggleLight(light);
    }
    else{
      localStorage.setItem('isLight', isLight);
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem('isLight', isLight);
  }, [isLight])

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand">voskrebentsev</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactme">Contact Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/aboutme'>About Me</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>toggleLight(!isLight)}>{colorButton}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
