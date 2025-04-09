import React, { useEffect, useState } from 'react';
import { client } from "../Client/Client";
import BlockContent from '@sanity/block-content-to-react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PrintingServices = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(`
          *[_type == "printing"] | order(_createdAt desc) {
            _id,
            title,
            slug,
            image {
              asset->{ url },
              alt
            },
            body
          }
        `);
        setCards(data);
        console.log(data);
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
        {cards.map((card) => (
          <div className="shadow-lg rounded-md p-4 w-full" key={card._id}>
            <img
              src={card.image?.asset?.url /* || PlasticCard */}
              alt={card.image?.alt || card.title}
              className="w-full h-[200px] object-cover rounded-t-md"
              loading="lazy"
            />
            <h3 className="text-colorPrimary font-merriweather-sans text-lg font-bold mt-2">
              {card.title}
            </h3>
            {card.body && (
              <div className="font-merriweather-sans text-sm mt-2">
                <BlockContent
                  blocks={card.body}
                  projectId="your_project_id" // <-- Replace this with your actual Sanity project ID
                  dataset="production"
                  className="font-merriweather-sans text-sm"
                />
              </div>
            )}
            {card?.slug?.current && (
              <button
                aria-label={`Read more about ${card.title}`}
                type="button"
                className="flex items-center mt-2 text-blue-600 hover:text-blue-800 transition-all"
                onClick={() => navigate(`/PrintingDetails/${card.slug.current}`)}
              >
                Read more <FaArrowRight className="ml-2 mt-[4px]" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintingServices;
