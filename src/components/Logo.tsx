import React, {useState} from 'react'
import {useTheme} from 'next-themes'

interface Logo
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  theme?: string
}

const Logo: React.FunctionComponent<Logo> = (props) => {
  const {theme, setTheme, resolvedTheme} = useTheme()
  const logoDarkTheme = '/images/bookmarks_light.png'
  const logoLightTheme = '/images/bookmarks_dark.png'
  let imgSrc = '/images/bookmarks_light.png'

  if (resolvedTheme === 'light') {
    imgSrc = logoLightTheme
  } else if (resolvedTheme === 'dark') {
    imgSrc = logoDarkTheme
  }
  console.log(`theme: ${theme}, imgSrc: ${imgSrc}`)
  return <img src={imgSrc} alt="Bookmarks" width="70px" />
}

export default Logo
