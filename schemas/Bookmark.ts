export default {
  name: 'bookmark',
  type: 'document',
  title: 'Bookmark',
  fields: [
    {
      name: 'link',
      title: 'link',
      type: 'url',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: [{type: 'tag'}],
    },
  ],
}
