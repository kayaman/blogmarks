import Bookmark from "@/types/Bookmark"
import algoliasearch from "algoliasearch/lite";

interface Props {
    bookmarks: Bookmark[],
    title; string
}
// (bookmarkIndex'1829c4b97ebaa6e0c42f47ec8eda9520'), '')


const searchClient = algoliasearch("bookmarkIndex=",'1829c4b97ebaa6e0c42f47ec8eda9520'))


    return (
        <p>just a test</p>
    )
}

export default SearchPage