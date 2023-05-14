\*\* last bm

```
*[_type == 'bookmark']|order(_createdAt desc)[0...1]
```

```json
{
  "query": "*[_type == 'bookmark']|order(_createdAt desc)[0...1]",
  "result": [
    {
      "_type": "bookmark",
      "title": "ajksjsaj",
      "_createdAt": "2023-05-14T03:12:16Z",
      "_rev": "V3cPBnzFe420zvluY1ygEy",
      "_id": "7493263d-afe3-47e8-b627-d50d42005ea2",
      "_updatedAt": "2023-05-14T03:12:16Z",
      "tags": [
        {
          "_type": "tag",
          "_key": "3416e9c95dbe",
          "_ref": "0c1cf467-2ec8-42f0-b465-6ee47e7cf9f4"
        },
        {
          "_ref": "e5b0c27f-885a-4b60-84ad-bc0c1cfa3ef0",
          "_type": "tag",
          "_key": "9370d75f9583"
        }
      ],
      "private": false,
      "link": "http://acbaba.ab"
    }
  ],
  "ms": 4
}
```

```
*[_type == 'bookmark'
  && title match "**"+$searchParam+"**"
  || link match "**"+$searchParam+"**"
  || tag[].name match "**"+$searchParam+"**"
]{link, title, 'tags': tags[]->{name}}[]

```

```
*[_type == 'bookmark'
    && title match "**"+$searchParam+"**"
    || link match "**"+$searchParam+"**"
    || $searchParam in tag[]
 ]{..., 'tags': tags[]->{name}}[]


*[_type == 'tag' && name == $searchParam]
'bookmarks':  *[_type=='bookmark' && references(^._id)]{..., 'tags': tags[]->}
```

\*\* backup

```
Filter: _type == "bookmark" && delta::changedOnly(tags)  Projection: tags[]->
```

```
curl --location 'https://zyofsvoi.api.sanity.io/v2021-10-21/data/query/production' \
--header 'Authorization: Bearer skle9QzNBfWzM14eBrsRii0JPEVt8ULd63gab1l1C6xn0TSgqcWIwyOioYkM382K2W6cbDpavwmAKNoEk' \
--header 'Content-Type: application/json' \
--data '{
    "query": "*[_type=='\''tag'\''&&name==$searchParam]{...,'\''bookmarks'\'':*[_type=='\''bookmark'\''&&references(^._id)]{...,'\''tags'\'':tags[]->}}",
    "params": {
        "searchParam": "vim"
    }
}'
```

```
curl --location 'https://zyofsvoi.api.sanity.io/v2021-10-21/data/query/production' \
--header 'Authorization: Bearer skle9QzNBfWzM14eBrsRii0JPEVt8ULd63gab1l1C6xn0TSgqcWIwyOioYkM382K2W6cbDpavwmAKNoEk' \
--header 'Content-Type: application/json' \
--data '{
    "query": "*[_type == '\''bookmark'\''&&title match'\''**'\''+$searchParam+'\''**'\''||link match'\''**'\''+$searchParam+'\''**'\''||$searchParam in tag[]]{..., '\''tags'\'': tags[]->{name}}",
    "params": {
        "searchParam": "vim"
    }
}'
```
