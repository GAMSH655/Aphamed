import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import "./Diplay.css"
const DisplayProduct = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000 })]);

  const slides = [
    { id: 1, className: 'branding' },
    { id: 2, className: 'printingservices' },
    { id: 3, className: 'giftItems' },
    { id: 4, className: 'customize_branding' },
    { id: 5, className: 'signage' }
  ];

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex gap-4">
      {slides.map((slide) => (
        <div key={slide.id} className="embla__slide flex-shrink-0 w-80 bg-white p-4 rounded shadow">
          <div className={slide.className + " h-48"}>
            ppp
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default DisplayProduct;
