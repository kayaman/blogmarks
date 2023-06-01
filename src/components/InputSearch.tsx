import React, {HTMLInputTypeAttribute} from 'react'

interface ISearchInputProps
  extends React.InputHTMLAttributes<React.InputHTMLAttributes<HTMLInputTypeAttribute>> {}

export const SearchInput: React.FC<ISearchInputProps> = (props) => {
  let _style: React.CSSProperties = style || {}

  return <input style={_style} {...props}></input>
}
