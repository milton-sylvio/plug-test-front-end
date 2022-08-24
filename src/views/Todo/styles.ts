import styled from 'styled-components'
import { 
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

export const Container = styled.main`
  align-items: center; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const Flex = styled.div`
  ${flexbox}

  display: flex;
`

export const Box = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}
  ${typography}
`
