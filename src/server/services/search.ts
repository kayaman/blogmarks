import Bookmark from '@/types/Bookmark'

export const search = async (term: string): Promise<Bookmark[]> => {
  console.log('--------------------- term')
  const allResults = (await searchByAttrs(term)) + (await searchByTagName(term))
  const results: Omit<Bookmark, '_type'>[] = allResults
  return results
}

const searchByAttrs = async (term: string) => {
  const payload = {
    query:
      "*[_type == 'bookmark'&&title match'**'+$searchParam+'**'||link match'**'+$searchParam+'**'||$searchParam in tag[]]{..., 'tags': tags[]->{name}}",
    params: {
      searchParam: term.toLowerCase(),
    },
  }

  const response = await fetch(process.env.SANITY_QUERY_ENDPOINT, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_HTTP_API_TOKEN}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload),
  })
  const results = await response.json()
  console.log('---------------------attrs results', results)
  return results
}

const searchByTagName = async (term: string) => {
  const payload = {
    query:
      "*[_type=='tag'&&name==$searchParam]{...,'bookmarks':*[_type=='bookmark'&&references(^._id)]{...,'tags':tags[]->}}",
    params: {
      searchParam: term.toLowerCase(),
    },
  }

  const response = await fetch(process.env.SANITY_QUERY_ENDPOINT, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_HTTP_API_TOKEN}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(payload),
  })
  const results = await response.json()
  console.log('---------------------tag results', results)
  return results
}
