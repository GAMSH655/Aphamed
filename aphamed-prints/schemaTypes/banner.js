import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
});
