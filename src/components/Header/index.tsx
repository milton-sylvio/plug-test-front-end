import React from 'react'
import Logo from '@/assets/logotipo.svg?component'

import { HeaderStyled } from './styles'  

const Header: React.FC = () => (
  <HeaderStyled ml="30px" mt="15px">
    <Logo />
  </HeaderStyled>
)

export default Header
