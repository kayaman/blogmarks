import Tag from './Tag'

type Bookmark = {
  _id: string
  link: string
  title: string
  private: boolean
  tags: Tag[]
  _createdAt: Date
  _updatedAt: Date
}

export type BookmarkInput = {
  _id?: string
  _type: string
  link: string
  title: string
  private?: boolean
}

export type BookmarkOutput = {
  _id: string
  _type: string
  link: string
  title: string
  private?: boolean
  tags?: Tag[]
}

export default Bookmark
