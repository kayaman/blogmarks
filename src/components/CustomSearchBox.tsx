import {connectSearchBox} from 'react-instantsearch-dom'

const CustomSearchBox = ({}) => (
  <form noValidate action="" role="search">
    <input type="search" value="" onChange={(event) => event.currentTarget.value} />
  </form>
)

const SearchBox = connectSearchBox(CustomSearchBox)

export default SearchBox
