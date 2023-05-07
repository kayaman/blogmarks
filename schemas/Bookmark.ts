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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tag',
            },
            {
              incoming: 'tag',
            },
          ],
        },
      ],
    },
  ],
}
