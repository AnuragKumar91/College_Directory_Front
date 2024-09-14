import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Test() {
    return (
        <>
        <Carousel className='carousel-wrapper'>
            <div className='carousel-item'>
                <img src={require("../images/dehli.png")} style={{height:"400px",width:"400px"}} alt="Delhi NCR" />
                <p className="legend">Legend 1</p>
            </div>
            <div className='carousel-item'>
                <img src={require("../images/dehli.png")} style={{height:"400px",width:"400px"}} alt="Delhi NCR" />
                <p className="legend">Legend 2</p>
            </div>
            <div className='carousel-item'>
                <img src={require("../images/dehli.png")} style={{height:"400px",width:"400px"}} alt="Delhi NCR" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
  
        </>
    );
}

export default Test;
