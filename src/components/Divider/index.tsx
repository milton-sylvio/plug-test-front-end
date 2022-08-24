import React from 'react'

import { IDividerProps } from './types'
import { Container } from './styles'

const Divider: React.FC<IDividerProps> = ({ orientation = 'horizontal' }) => (
  <Container borderColor="black" className={orientation} />
)

export default Divider
