export default {
    name: "brand",
    title: "Branding",
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
        type: "text",
      },
      {
        name: "image",
        title: "Brand Image",
        type: "image",
        options: { hotspot: true },
      },
     
    ],
  };
  