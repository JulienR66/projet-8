import '../styles/Slides.css';
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import React, { useState } from 'react';

function Slides({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
      const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
      setCurrentIndex(newIndex);
    };
  
    const goToNextSlide = () => {
      const newIndex = (currentIndex + 1) % pictures.length;
      setCurrentIndex(newIndex);
    };

     // Condition pour cacher les flèches et la numérotation pour une seule image
  const hideControls = pictures.length <= 1;

  return (
    <div className='slides-container'>
      {/* Condition pour afficher ou cacher les flèches */}
      {!hideControls && (
        <>
          <img className='slides-arrow slides-arrow-left' src={arrowLeft} alt="" onClick={goToPreviousSlide} />
          <img className='slides-arrow slides-arrow-right' src={arrowRight} alt="" onClick={goToNextSlide} />
        </>
      )}

      {/* Afficher la numérotation */}
      {!hideControls && <p className="slide-number">{`${currentIndex + 1}/${pictures.length}`}</p>}

      {/* Afficher l'image */}
      <img className='slides-img' src={pictures[currentIndex]} alt="" />
    </div>
  );
}

export default Slides