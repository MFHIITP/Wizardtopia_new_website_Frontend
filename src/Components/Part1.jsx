import React from 'react';
import { useState, useEffect } from 'react';

import image1 from "../../Images/0a5a45214ae13fbb275ec73cc0e27495.jpg";
import image2 from "../../Images/60957a3d34af8d001859c0ff.webp";
import image3 from "../../Images/71Xi7Y6LSRL.jpg";
import image4 from "../../Images/harry-potter-background-kbrb6vlqr8ych08x.jpg";
import image5 from "../../Images/HogwartsCastle_WB_F5_HogwartsCastleIllustration_Illust_080615_Land.jpg";
import Anime from './Anime';
const images = [ image4, image1, image2, image3, image5 ];

function Part1(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={`relative flex justify-center items-center mt-2 mb-10 ${props.Popup ? 'none' : 'anime'}`}>
      {images.map((myimage, index) => (
        <img 
          key={index} 
          src={myimage} 
          alt="Description of the image" 
          className={index === currentIndex ? 'w-full h-auto max-h-[90vh] max-w-full' : 'hidden'} 
        />
      ))}
      <div className="absolute bottom-2 sm:bottom-4 flex justify-center w-full">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:h-3 sm:w-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <div className='absolute top-[30%] left-auto font-serif text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
        Welcome to Wizardtopia
      </div>
      <div className='absolute top-[50%] left-auto font-serif text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
        <Anime/>
      </div>
    </div>
  );
}

export default Part1;
