import {AnchorHTMLAttributes, DetailedHTMLProps} from 'react'

const CustomLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <div>this link is problematic</div> //<Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        this Link is deprecated
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      this Link is deprecatedthis Link is deprecated
    </a>
  )
}

export default CustomLink
