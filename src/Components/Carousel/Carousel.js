import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const imageUrls = ["https://www.govisitcostarica.co.cr/images/photos/desk-la-paz-waterfall-costa-rica(1).jpg",
  "https://www.govisitcostarica.co.cr/images/photos/desk-montezuma-waterfall-on-the-nicoya-peninsula-near-santa-teresa.jpg",
  "https://www.govisitcostarica.co.cr/images/photos/desk-hills-in-monteverde.jpg",
  "https://www.govisitcostarica.co.cr/images/photos/desk-cloudforest-monteverde.jpg",
  "https://www.govisitcostarica.co.cr/images/photos/desk-corcovado-national-park-beach-sunset.jpg"//AGREGAR LAS IMAGENES DEL CARRUSEL
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, //VELOCIDAD DE TRANSICION
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="w-full h-full flex-grow flex-shrink">
          {imageUrls.map((imageUrl, index) => (
              <div key={index} className="w-full h-full">
                  <img
                      src={imageUrl}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-full object-cover"
                  />
              </div>
          ))}
      </Slider>
    </div>

  );
};

export default Carousel;
