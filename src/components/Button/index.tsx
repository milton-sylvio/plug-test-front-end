import React from 'react'
import { ButtonStyled } from './styles'

import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ icon, isLoading, children, ...rest }) => {

  return (
    <ButtonStyled
      alignItems="center"
      borderRadius="normal"
      fontSize={1}
      color="white"
      display="flex"
      {...rest}
    >
      {children}
    </ButtonStyled>
  )
}


export default Button