import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Feedbacks = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 1000 })]);

  const reviews = [
    {
        id: 1,
        name: "Olasumbo Salami FB",
        rating: 5,
        review: "Aphamed Prints exceeded my expectations! The print quality was outstanding, and the colors were vibrant and true to the design. The customer support team was incredibly helpful and ensured that my order was processed smoothly. Delivery was quick, and everything arrived in perfect condition. I will definitely be using their services again!",
        date: "2024-03-10",
      },
      {
        id: 2,
        name: "abdulquadri shittu",
        rating: 4,
        review: "Great service from Aphamed Prints! The materials used for printing were high quality, and the final result looked fantastic. My only issue was that my order took a day longer than expected to arrive, but other than that, I was very happy with the experience. Would recommend to anyone looking for professional printing services.",
        date: "2024-03-08",
      },
      {
        id: 3,
        name: "Azeez Oladipo INKSNAP",
        rating: 5,
        review: "Aphamed Prints is by far the best printing company I’ve worked with! The team was professional, the communication was excellent, and the end product was flawless. I placed a large order for business brochures, and they turned out even better than I had imagined. Thank you for your dedication to quality and customer satisfaction!",
        date: "2024-03-05",
      },
      {
        id: 4,
        name: "Ahmed R.A",
        rating: 4.5,
        review: "I ordered customized posters from Aphamed Printns, and they were amazing! The colors were sharp, the paper quality was premium, and the details were crisp. The only slight downside was that the packaging could have been a bit sturdier, but my prints arrived safely, so it wasn’t a big issue. Overall, I highly recommend them!",
        date: "2024-03-02",
      },
      {
        id: 5,
        name: "AHMED SHAKIRAT OLAITAN",
        rating: 3.5,
        review: "My experience with Aphamed Prints was decent. The prints were good, but I expected slightly better resolution for the price I paid. Customer service was helpful, though, and they addressed my concerns quickly. I might give them another chance for a smaller order to see if the quality improves.",
        date: "2024-02-28",
      },
      {
        id: 6,
        name: " AMAKHABI SARAH AMIE",
        rating: 5,
        review: "Fantastic work by Aphamed Prints I ordered custom wedding invitations, and they turned out absolutely beautiful. The attention to detail and the elegant finish made them stand out. The team was also great in providing design advice and making sure everything was perfect before printing. Couldn’t be happier!",
        date: "2025-03- 15",
      },
      {
        id: 7,
        name: "JEHU ASELA",
        rating: 4,
        review: "The print quality from Aphamed Prints was fantastic! My business cards came out looking sleek and professional. However, I feel like the pricing could be slightly more competitive. Other than that, it was a great experience, and I will likely order again in the future.",
        date: "2024-02-22",
      },
      {
        id: 8,
        name: "everytin fashion",
        rating: 5,
        review: "I had an urgent order for event flyers, and Aphamed Prints delivered right on time! The turnaround was incredibly fast, and the print quality was top-notch. I appreciate the dedication of their team in ensuring my order was processed quickly without compromising quality. Highly recommend them!",
        date: "2024-02-18",
      },
      {
        id: 9,
        name: "Mayomi williams ",
        rating: 4.5,
        review: "Very pleased with my experience at Aphamed Prints. I ordered customized greeting cards, and they were exactly as I envisioned. The paper felt luxurious, and the colors were rich and vibrant. The only reason I’m not giving 5 stars is that I had to reach out for an order update, but otherwise, everything was perfect!",
        date: "2024-02-14",
      },
      {
        id: 10,
        name: "KICHIES DELIGHT",
        rating: 5,
        review: "Aphamed Prints never disappoints! I’ve ordered multiple times, and every order has been handled professionally. From brochures to posters, everything has been printed with precision and attention to detail. Their customer service is also excellent – responsive and always ready to assist. Definitely my go-to printing company!",
        date: "2024-02-10",
      },
  ];

  return (
  <div className="mt-[20px] md:mt-[100px]">
      <h2 className="text-2xl font-bold text-colorPrimary text-center m-3">Hear What Our Customers Say!</h2>
      <div className="embla  p-6 rounded-lg" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="embla__slide bg-white p-4 rounded-lg shadow-md w-80">
            <h3 className="text-lg font-semibold font-merriweather-sans uppercase">{review.name}</h3>
            <p className="text-sm text-gray-600 font-merriweather-sans">{review.date}</p>
            <p className="mt-2 text-gray-800 font-merriweather-sans">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Feedbacks;
