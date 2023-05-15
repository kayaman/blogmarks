import Bookmark from '@/types/Bookmark'
import axios from 'axios'
export const search = async (term: string): Promise<Bookmark[]> => {
  const allResults = await searchByAttrs(term) //+ (await searchByTagName(term))
  const results: Omit<Bookmark, '_type'>[] = allResults
  return results
}

const parsedResponse = (response): Bookmark[] => {
  console.log('response', response)
  const bookmarks: Bookmark[] = JSON.parse(response)['result']
  return bookmarks
}

const searchByAttrs = async (term: string) => {
  const endpoint = 'https://zyofsvoi.api.sanity.io/v2021-10-21/data/query/production'
  const payload = {
    query:
      "*[_type=='bookmark' && title match '**'+$searchParam+'**' || link match'**'+$searchParam+'**']{_id,title,link,'tags':tags[]->{_id,name}}",
    params: {
      searchParam: term.toLowerCase(),
    },
  }
  let results = []
  axios({
    method: 'post',
    url: endpoint,
    data: payload,
    headers: {
      Authorization: `Bearer skle9QzNBfWzM14eBrsRii0JPEVt8ULd63gab1l1C6xn0TSgqcWIwyOioYkM382K2W6cbDpavwmAKNoEk`,
    },
  }).then((response) => (results = parsedResponse(response)))

  // const response = await fetch(process.env.SANITY_QUERY_ENDPOINT, {
  //   method: 'POST',
  //   mode: 'cors',
  //   cache: 'no-cache',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.SANITY_HTTP_API_TOKEN}`,
  //   },
  //   redirect: 'follow',
  //   referrerPolicy: 'no-referrer',
  //   body: JSON.stringify(payload),
  // })
  // const results = await response.json()
  //return parsedResponse(results)
  return results
}

const searchByTagName = async (term: string) => {
  const payload = {
    query:
      "*[_type=='tag'&&name==$searchParam]{name,'bookmarks':*[_type=='bookmark'&&references(^._id)]{_id,link,title,'tags':tags[]->{_id,name}}}",
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
  // console.log('---------------------tag results', results)
  return results
}
