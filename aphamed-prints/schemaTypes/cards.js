import { defineField, defineType } from "sanity";

export default defineType({
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string", // ✅ Corrected from 'image' to 'string'
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image", // ✅ If you want an image field, define it separately
      options: {
        hotspot: true, // Allows image cropping
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",  // Auto-generate slug from the "title" field
        maxLength: 200,   // Limit slug length
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),    
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'blockContent',
    }),
  ],
});
