import React from 'react';
import {Link} from 'react-router-dom';
import ava from  '../../img/ava.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className={`container `} >
      <h1 className="display-4">About Me</h1>
      <div className='about-block'>
        <div className='ava-block'>
          <img src={ava} alt='ava' id='ava'/>
        </div>
        <div className='info-block'>
          <p>Welcome, my name is Matvey. I'm at the beginning of my IT career.
            You can see some of my projects on the <Link to='/'>mainpage</Link> and on <a href='github.com/voskrebentsev'>github</a>.
            So I worked with these technologies: JS, CCS, HTML, Bootstrap, React, React Hooks, React Router, Redux, Thunk, Axios, React Native etc.
            Right now I'm looking an opportunity to work in a good team to expand my knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
