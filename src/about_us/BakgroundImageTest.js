import React from 'react';
import image1 from './abroad.png';

function BakgroundImageTest() {
  const myStyle = {
    backgroundImage: `url(${image1})`,
    maxWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className='box' style={myStyle}>
      <p>Hii Shubham</p>
    </div>
  );
}

export default BakgroundImageTest;
