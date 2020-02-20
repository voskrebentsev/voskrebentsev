import React from 'react';
import ava from  '../img/ava.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className={`container `}>
      <h1 className="display-4">About Me</h1>
      <div className='about-block'>
        <div className='ava-block'>
          <img src={ava} alt='ava' id='ava'/>
        </div>
        <div className='info-block'>
          <p>First of all hi, I'm glad that you are here.
            So, my name is Matvey. I'm... To be honest it's really difficult to decscibe myself
            not because I have nothing to say, but because
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
