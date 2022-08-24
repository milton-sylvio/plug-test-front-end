import styled from 'styled-components'
import { 
  color,
  border,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import { darken } from 'polished'

export const ButtonStyled = styled.button`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}

  background-color: ${ props => props.theme.colors.primary };
  padding: 14px;
  text-transform: uppercase;
  transition: background-color 0.5s ease;

  > svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${ props => darken(0.05, props.theme.colors.primary) };
  }
`