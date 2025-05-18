import React, { useState, useEffect } from 'react';
import './CarouselBanner.css';

// Placeholder slides data - replace with dynamic data later
const initialSlides = [
  {
    title: 'Bem-vindo ao nosso site!',
    subtitle: (
      <>
        Acompanhe as últimas notícias e jogos do nosso time.{' '}
        <a href="/campeonatos" style={{ color: 'var(--primary-color)' }}>Veja os Campeonatos</a>!
      </>
    ),
    imageName: 'benvindo.jpg', // Replace with actual image names
    altText: 'Classe FC team in action',
  },
  {
    title: 'Comissão Técnica',
    subtitle: (
      <>
        Conheça nossa comissão técnica e os profissionais que fazem a diferença!{' '}
        <a href="/time" className="carousel-subtitle-link">Saiba Mais</a>
      </>
    ),
    imageName: 'chiquinho.png', // Replace with actual image names
    altText: 'Comissão técnica do Classe FC',
  },
  {
    title: 'Nossa História, Nossa Paixão',
    subtitle: (
      <>
        Conheça os momentos que definiram o Classe FC.{' '}
        <a href="/historia" className="carousel-subtitle-link">Descubra Nossa Trajetória</a>
      </>
    ),
    imageName: 'historia.png', // Replace with actual image names
    altText: 'Historic moment of Classe FC',
  },
];

const CarouselBanner = ({ imageFolderName = 'carousel-images' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(initialSlides);

  // Construct full image paths
  const slidesWithImagePaths = slides.map(slide => ({
    ...slide,
    imageUrl: `/${imageFolderName}/${slide.imageName}`
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesWithImagePaths.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesWithImagePaths.length - 1 : prev - 1));
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds
    return () => clearTimeout(timer);
  }, [currentSlide, slidesWithImagePaths.length]);

  if (!slidesWithImagePaths.length) {
    return null; // Or some fallback UI
  }

  return (
    <div className="carousel-banner">
      {slidesWithImagePaths.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="carousel-text-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            {/* You can add a button/link here if needed */}
            {/* <a href="#" className="carousel-cta">Saiba Mais</a> */}
          </div>
          <div className="carousel-image-content">
            <img src={slide.imageUrl} alt={slide.altText || slide.title} />
          </div>
        </div>
      ))}
      <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>

      <div className="carousel-dots">
        {slidesWithImagePaths.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
