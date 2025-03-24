import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'cxndg4r9',
    dataset: 'production',
    apiVersion:"2024-03-24",
      useCdn: "true",
      token: import.meta.env.VITE_SANITY_TOKEN
})