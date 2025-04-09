import React, { useEffect, useState } from 'react';
import { client } from "../Client/Client";
import BlockContent from '@sanity/block-content-to-react';
import { useParams } from 'react-router-dom';

const PrintingSerDetails = () => {
  const [card, setCard] = useState(null);  // Single card instead of an array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    if (!slug) {
      setError('Invalid slug.');
      setIsLoading(false);
      return;
    }

    const fetchCard = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(`
          *[_type == "printing" && slug.current == $slug][0] {
            title,
            slug,
            image {
              asset->{ url },
              alt
            },
            body
          }
        `, { slug });

        setCard(data);
      } catch (err) {
        console.error("Failed to fetch card:", err);
        setError('Error loading card details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCard();
  }, [slug]);

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
    return <div className="text-red-500 p-4">{error}</div>;
  }

  if (!card) {
    return <div className="p-4">Card not found.</div>;
  }

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="shadow-lg rounded-md p-4 w-full">
          <img
            src={card.image?.asset?.url || 'https://via.placeholder.com/200'} // Default fallback image
            alt={card.image?.alt || card.title}
            className="w-full h-[200px] object-contain rounded-t-md"
            loading="lazy"
          />
          <h3 className="text-colorPrimary font-merriweather-sans text-lg font-bold mt-2">
            {card.title}
          </h3>
          {card.body && (
            <div className="font-merriweather-sans text-sm mt-2">
              <BlockContent
                blocks={card.body}
                projectId="your-project-id"
                dataset="production"
                className="font-merriweather-sans text-sm"
              />
            </div>
          )}
          <div className="flex justify-center items-center m-5">
            <a
              href="https://api.whatsapp.com/send/?phone=2349091643613&text&type=phone_number&app_absent=0"
              className="p-2 hover:shadow-md transition-all w-[180px] text-center border-2 hover:border-black rounded-md"
            >
              Send a DM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingSerDetails;
