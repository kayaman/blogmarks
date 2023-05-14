import React from 'react'

interface ISearchInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  searchTerm: string
}

export const SearchInput: React.FunctionComponent<ISearchInput> = (props) => {
  return <input type="search"></input>
}
