import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import "./Diplay.css"
import { NavLink } from 'react-router-dom';
const DisplayProduct = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000 })]);

  const slides = [
    { id: 1, className: 'branding' , pathLink: "/branding" , pathName:"Branding"},
    { id: 2, className: 'printingservices' , pathLink: "/printingservices" , pathName:"Printing services"  },
    { id: 3, className: 'giftItems' ,  pathLink: "/giftItems" , pathName:" Gift items"  },
    { id: 4, className: 'customize_branding' , pathLink:"branding" , pathName:"Customize branding"  },
    // { id: 5, className: 'signage' }
  ];

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex gap-4">
      {/* {slides.map((slide) => (
        <div key={slide.id} className="embla__slide flex-shrink-0 w-80 bg-white ">
          <div className={slide.className + " h-48  rounded-md "}>
             <NavLink to={slides.pathLink} className="text-red-600"> {slides.pathName}</NavLink>
             <p>kmklnvjkvh</p>
          </div>
        </div>
      ))} */}
      {
        slides.map(({id , className , pathLink , pathName})=>{
          return <div key={id} className="embla__slide flex-shrink-0 w-80 bg-white ">
          <div className={className + " h-48  rounded-md relative"}>
          <NavLink to={pathLink} className="text-white  text-[1.5rem] md:text-[2.5rem] top-[80px] absolute caption-top"> {pathName}</NavLink>
          </div>
          </div>
        })
      }
    </div>
  </div>
  
  );
};

export default DisplayProduct;
