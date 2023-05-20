import { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@/server/persistence/sanityClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const {link, type} = req.body 
    const payload = {
        _type: 'bookmark',
        link: "https://semver.org",
        title: "Semantic Versioning",
    }
    //TODO: validation
    const bookmark = await sanityClient.create(payload)
    return bookmark
};
 
export default handler

