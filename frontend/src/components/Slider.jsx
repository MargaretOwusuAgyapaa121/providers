import React from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: '/assets/img/bg-img.jpg',
      alt: 'First slide',
    },
    {
      id: 2,
      image: '/assets/img/min.jpg',
      alt: 'Second slide',
    },
    {
      id: 3,
      image: '/assets/img/pastors.jpg',
      alt: 'Third slide',
    },
  ];

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
            <div className="banner-detail text-center">
              <h3 className="banner-title">Save The Children</h3>
              <span className="heading-span inline">
                CHILDREN AND POOR PEOPLE ARE AT HIGH RISK OF SEVERE MALNUTRITION & NO EDUCATION
              </span>
              <a href="#" className="donate">
                DONATE NOW
              </a>
            </div>
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
