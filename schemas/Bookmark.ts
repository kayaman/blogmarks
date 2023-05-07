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
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'url',
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
