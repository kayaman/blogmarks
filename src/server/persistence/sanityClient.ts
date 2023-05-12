import clientConfig from '@/sanity/clientConfig'
import {SanityClient, createClient} from 'next-sanity'

const sanityClient: SanityClient = createClient(clientConfig)

export default sanityClient
