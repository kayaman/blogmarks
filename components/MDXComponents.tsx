/* eslint-disable react/display-name */
import React from 'react'
import {MDXLayout, ComponentMap} from 'pliny/mdx-components'
import {TOCInline} from 'pliny/ui/TOCInline'
import {Pre} from 'pliny/ui/Pre'
import {BlogNewsletterForm} from 'pliny/ui/NewsletterForm'

import Image from './Image'
import Link from 'next/link'

export const Wrapper = ({layout, content, ...rest}: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
}
