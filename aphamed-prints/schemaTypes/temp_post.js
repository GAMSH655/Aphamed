export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text", // Content should only be text
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Allows image cropping in Sanity Studio
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for screen readers.",
        },
      ],
    },
  ],
};
