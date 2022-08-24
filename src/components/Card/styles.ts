import styled from 'styled-components'
import { background, border, layout, typography, space } from 'styled-system'

export const Container = styled.div`
  ${background}
  ${border}
  ${space}
  ${layout}
`
export const Title = styled.h3`
  ${border}
  ${layout}
  ${space}
  ${typography}
`

export const Description = styled.p`
  ${border}
  ${layout}
  ${space}
  ${typography}
`
