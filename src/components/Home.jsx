import React from 'react';
import './Home.css';
import Image from './a.jpg'
const Home = () => {
  return (
    <div className="home-container">
    {/*https://assets.codepen.io/3/surfer.jpg */}
      <img className="background-image" src= {Image} alt="Description of the image for screen readers" />
      <div className="content">
        <h1 className="heading">Hello , 
        I'm Kartikeyan </h1>
        <p className="intro">
I am a tech virtuoso, orchestrating the symphony of code with the elegance of C++, the responsiveness of React, the versatility of Python, and the magic of machine learning. I navigate the realms of innovation, transforming complex algorithms into captivating solutions.</p>
      </div>
    </div>
  );
};

export default Home;
