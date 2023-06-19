import React from 'react'

export interface SearchInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  term: string
  className?: string
}

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  const {className, term} = props
  return <input type="search" className={className} value={term} />
}
export default SearchInput

const StyledSearchInput = ({className, children}) => {}
