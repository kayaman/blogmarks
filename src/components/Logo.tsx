import React, {useState} from 'react'
import {useTheme} from 'next-themes'
import {Image} from 'sanity'

interface Logo
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  theme?: string
}

const Logo: React.FunctionComponent<Logo> = (props) => {
  const [logoTheme, setLogoTheme] = useState()
  const {theme, setTheme, resolvedTheme} = useTheme()
  const logoDarkTheme = '/images/bookmarks_light.png'
  const logoLightTheme = '/images/bookmarks_dark.png'
  let imgSrc = '/images/bookmarks_light.png'

  if (resolvedTheme === 'light') {
    imgSrc = logoLightTheme
  } else if (resolvedTheme === 'dark') {
    imgSrc = logoDarkTheme
  }
  return <img src={imgSrc} alt="Bookmarks" width="70px" />
}

export default Logo
