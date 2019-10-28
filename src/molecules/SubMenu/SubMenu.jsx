import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import NextLink from 'next/link'

import Link from 'atoms/Link'

import { SubMenuWrapper } from './styles'

const buildLinks = map(({ href, text, as = null }) => (
  <NextLink key={href} href={href} as={as}>
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
      as: PropTypes.string,
    }),
  ).isRequired,
}

export default React.memo(SubMenu)
