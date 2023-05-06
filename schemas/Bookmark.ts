export default {
  name: "bookmark",
  type: "document",
  title: "Bookmark",
  fields: [
    {
      name: "link",
      title: "link",
      type: "url",
    },
    {
      name: "tags",
      title: "Tag",
      type: "reference",
      to: [{ type: "tag" }],
    }
  ]
}
