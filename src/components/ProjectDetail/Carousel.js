import React from 'react';
import './Carousel.css';

const Carousel = ({imgs}) => {
  console.log(imgs)
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {
          imgs.map((img, i) => {
            const active = i === 0 ? 'active' : '';
            return (
                <div 
                  className={`carousel-item ${active}`} 
                  key={i} 
                >
                  <img
                    src={require(`${img}`)}
                    className="d-block w-50 tableimg"
                    alt="img"
                  />
                </div>
            )
          })}
          
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel
