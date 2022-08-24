import React from 'react'

import { Container } from './styles'

export interface IHeading {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const Heading: React.FC<IHeading> = ({ as = 'h1', children, ...rest }) => (
  <Container as={as} {...rest}>{children}</Container>
)

export default Heading