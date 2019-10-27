import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import NextLink from 'next/link'

import Link from 'atoms/Link'

import { SubMenuWrapper } from './styles'

const buildLinks = map(({ href, text }) => (
  <NextLink key={href} href={href}>
    <Link>{text}</Link>
  </NextLink>
))

const SubMenu = ({ links }) => {
  return <SubMenuWrapper>{buildLinks(links)}</SubMenuWrapper>
}

SubMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default React.memo(SubMenu)
