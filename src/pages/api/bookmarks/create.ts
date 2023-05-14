import sanityClient from '@/server/persistence/sanityClient'
import Bookmark from '@/types/Bookmark'
import type {NextApiRequest, NextApiResponse} from 'next'
import {SanityDocument} from 'sanity'

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = req.body
  const bookmark = await sanityClient.create(payload)
  res.status(201).json(bookmark)
}
