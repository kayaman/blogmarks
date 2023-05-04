import { type SchemaTypeDefinition } from 'sanity'

const tag = {
  name: "tag",
  type: "document",
  title: "Tag",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Tag"
    }
  ]
}

const bookmark = {
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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookmark, tag],
}
