import React from 'react'

import { CardProps } from './types'  
import { Container, Title, Description } from './styles'  

const Card: React.FC<CardProps> = ({ description, title, type = 'do' }) => {
  const cardColor = type === 'do' ? 'blue' : 'green'
  return (
    <Container 
      background="white"
      borderLeftWidth="12px"
      borderLeftStyle="solid"
      borderLeftColor={cardColor}
      borderRadius="10px"
      minHeight="65px"
      mb="25px"
      p="8px"
      width="332px"
    >
      <Title fontSize="14px">{title}</Title>
      {description && (<Description fontSize="12px">{description}</Description>)}
    </Container>
  )
}

export default Card
