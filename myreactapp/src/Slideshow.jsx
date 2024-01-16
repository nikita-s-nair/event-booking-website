import React, { useState } from 'react';
import Slider from 'react-slick'; 
import circus_3 from '../src/assets/circus_3.jpg';
import comedy_4 from '../src/assets/comedy_4.jpg';
import concert_4 from '../src/assets/concert_4.jpg';
import opera_4 from '../src/assets/opera_5.jpg';
import plays_3 from '../src/assets/plays_3.jpg';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: circus_3 },
    { id: 2, image: comedy_4 },
    { id: 3, image: concert_4 },
    { id: 4, image: opera_4 },
    { id: 5, image: plays_3 },
  ];

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Slider>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Slideshow;
