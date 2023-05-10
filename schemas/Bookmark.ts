import {defineType, defineField, defineArrayMember} from 'sanity'

const bookmark = defineType({
  name: 'bookmark',
  type: 'document',
  title: 'Bookmark',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      options: {
        isUnique: true,
        maxLength: 140,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'private',
      title: 'Private',
      type: 'boolean',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          name: 'tag',
          to: [{type: 'tag'}],
        }),
      ],
    }),
  ],
  initialValue: {
    private: false,
  },
})

export default bookmark
