import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bfwue23m', // Replace with your actual Sanity project ID
  dataset: 'prod', // Ensure this matches your dataset name in Sanity
  apiVersion: "2023-01-01", // Use a stable API version
  useCdn: false, // Set to false if you need real-time data
  token: import.meta.env.VITE_SANITY_TOKEN, // Make sure this is defined in your .env file
});

export default client;
