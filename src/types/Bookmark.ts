import {Tag} from './Tag'

export type Bookmark = {
  _id: string
  link: string
  tags: Tag[]
  _createdAt: Date
  _updatedAt: Date
}
