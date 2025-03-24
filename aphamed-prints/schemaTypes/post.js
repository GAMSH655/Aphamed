import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }], // ✅ Correctly reference the "author" type
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent", // ✅ Ensure blockContent exists in schema.js
    }),
  ],
});
