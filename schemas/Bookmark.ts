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
})

export default bookmark
