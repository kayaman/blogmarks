import {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const UselessContainer = ({children}: Props) => {
  return {children}
}

export default UselessContainer
