// Module
import { useState } from 'react';
// Assets
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";


function Gallery({ slide }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slide.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slide.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      style={{ backgroundImage: `url(${slide[currentIndex]})` }}
      className='carousel'
    >
      {slide.length > 1 && (
        <>
          <img
            className='carousel_arrow carousel_arrow_right'
            src={arrowRight}
            alt="Voir la prochaine diapositive"
            onClick={nextSlide}
          />
          <img
            className='carousel_arrow carousel_arrow_left'
            src={arrowLeft}
            alt="Voir la précédente diapositive"
            onClick={previousSlide}
          />
          <p className='slideCount'>{currentIndex + 1} / {slide.length}</p>
        </>
      )}
    </section>
  );
}

export default Gallery;