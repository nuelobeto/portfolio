export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "description1",
      title: "Description1",
      type: "text",
    },
    {
      name: "description2",
      title: "Description2",
      type: "text",
    },
    {
      name: "description3",
      title: "Description3",
      type: "text",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
