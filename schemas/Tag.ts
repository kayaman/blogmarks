import {defineType, defineField, defineArrayMember} from 'sanity'

const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Tag',
    }),
  ],
})

export default tag
