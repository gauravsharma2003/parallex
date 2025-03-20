import React, { useEffect, useState } from 'react'
import './App.css' // We'll create this file next
import scam1 from "../src/assets/scam/1.png"
import scam2 from "../src/assets/scam/2.png"
import scam3 from "../src/assets/scam/3.png"
import scam4 from "../src/assets/scam/4.png"
import scam5 from "../src/assets/scam/5.png"
import scam6 from "../src/assets/scam/6.png"
import scam8 from "../src/assets/scam/8.png"
import scam9 from "../src/assets/scam/9.png"
import scam10 from "../src/assets/scam/10.png"
import scam11 from "../src/assets/scam/11.png"
import scam12 from "../src/assets/scam/12.png"
import scam13 from "../src/assets/scam/13.png"
import scam14 from "../src/assets/scam/14.png"
import scam15 from "../src/assets/scam/15.png"
import scam16 from "../src/assets/scam/16.png"
import scam17 from "../src/assets/scam/17.png"
import scam18 from "../src/assets/scam/18.png"
import scam19 from "../src/assets/scam/19.png"
import scam20 from "../src/assets/scam/20.png"
import scam21 from "../src/assets/scam/21.png"
import scam22 from "../src/assets/scam/22.png"
import scam23 from "../src/assets/scam/23.png"
import scam24 from "../src/assets/scam/24.png"
import scam25 from "../src/assets/scam/25.png"
import scam26 from "../src/assets/scam/26.png"
import scam27 from "../src/assets/scam/27.png"
import scam28 from "../src/assets/scam/28.png"
import scam29 from "../src/assets/scam/29.png"
import scam30 from "../src/assets/scam/30.png"
import scam31 from "../src/assets/scam/31.png"
import scam32 from "../src/assets/scam/32.png"
import scam33 from "../src/assets/scam/33.png"
import scam34 from "../src/assets/scam/34.png"
import scam35 from "../src/assets/scam/35.png"
import scam36 from "../src/assets/scam/36.png"
import scam37 from "../src/assets/scam/37.png"
import scam38 from "../src/assets/scam/38.png"
import scam39 from "../src/assets/scam/39.png"
import scam40 from "../src/assets/scam/40.png"

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);
  
  const images = [
    scam1, scam2, scam3, scam4, scam5, scam6, scam8, scam9, scam10,
    scam11, scam12, scam13, scam14, scam15, scam16, scam17, scam18, scam19, scam20,
    scam21, scam22, scam23, scam24, scam25, scam26, scam27, scam28, scam29, scam30,
    scam31, scam32, scam33, scam34, scam35, scam36, scam37, scam38, scam39, scam40
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set document height based on number of images
    document.body.style.height = `${images.length * 100}vh`;
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPerImage = scrollHeight / (images.length - 1);
    const newIndex = Math.min(
      Math.floor(scrollPosition / scrollPerImage),
      images.length - 1
    );
    
    if (newIndex !== currentImage) {
      setOpacity(0); // Start fading out
      
      setTimeout(() => {
        setCurrentImage(newIndex);
        setOpacity(1); // Start fading in
      }, 50); // Match this with the CSS transition duration
    }
  }, [scrollPosition, images.length, currentImage]);

  return (
    <div className="parallax-container">
      <div className="image-container">
        <img 
          src={images[currentImage]} 
          alt={`scam${currentImage + 1}`} 
          className="fullscreen-image"
          style={{ opacity: opacity }}
        />
      </div>
    </div>
  )
}

export default App
