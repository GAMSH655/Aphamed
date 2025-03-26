import React, { useEffect, useState } from 'react';
import { client } from "../../Client/Client";
import BlockContent from '@sanity/block-content-to-react';
const Cards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(`
          *[_type == "card"] {
            title,
            image {
              asset->{ url },
              alt
            },
            body
          } | order(_createdAt desc)
        `);
        setCards(data);
        console.log(data)
      } catch (err) {
        console.error("Failed to fetch cards:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, index) => (
            <div className="shadow-lg rounded-md p-4 w-full" key={`loading-${index}`}>
              <div className="w-full h-[200px] bg-gray-200 animate-pulse rounded-t-md" />
              <div className="h-4 bg-gray-200 animate-pulse mt-2 w-3/4" />
              <div className="h-3 bg-gray-200 animate-pulse mt-2 w-full" />
              <div className="h-3 bg-gray-200 animate-pulse mt-1 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4">Error loading cards: {error.message}</div>;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div className="shadow-lg rounded-md p-4 w-full" key={`${card.title}-${index}`}>
            <img
              src={card.image?.asset?.url || PlasticCard}
              alt={card.image?.alt || card.title}
              className="w-full h-[200px] object-cover rounded-t-md"
              loading="lazy"
            />
            <h3 className="text-colorPrimary font-merriweather-sans text-lg font-bold mt-2">
              {card.title}
            </h3>
            {card.body && (
              <div className="font-merriweather-sans text-sm mt-2">
                {/* Simple text rendering - consider adding block content parser */}
               <p className="">
               <BlockContent 
                blocks={card.body}
                projectId="your-project-id"
                dataset="production"
                className="font-merriweather-sans text-sm"/>
               </p>
              </div>
            )}
            <div className="flex justify-center items-center">
            <a href="https://api.whatsapp.com/send/?phone=2349091643613&text&type=phone_number&app_absent=0" className='p-2  rounded-mds hover:shadow-md transition-all  w-[180px] text-center border-2  hover:border-black rounded-md'> send a dm</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;