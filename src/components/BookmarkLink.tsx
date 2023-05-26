import React from 'react'

export interface IBookmarkLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string
  title?: string
  className?: string
  ariaLabel?: string
}

export const BookmarkLink: React.FunctionComponent<IBookmarkLinkProps> = (props) => {
  const {href, title, className, target, rel, ariaLabel} = props

  let _style = className || '' // = React.CSSProperties
  let _title = href
  let _target = '_blank'
  let _rel = 'noopener noreferrer'
  let _ariaLabel = 'Follow this bookmark'
  if (className) _style = className
  if (target) _target = target
  if (title) _title = title
  if (rel) _rel = rel
  if (ariaLabel) _ariaLabel = ariaLabel

  return (
    <a href={href} className={_style} rel={_rel} aria-label={_ariaLabel} target={_target}>
      {_title}
    </a>
  )
}
