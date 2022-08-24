import styled from 'styled-components'
import { background, border, color, layout, space } from 'styled-system'

export const Container = styled.hr`
  ${background}
  ${border}
  ${color}
  ${space}
  ${layout}

  border-style: solid;
  box-sizing: content-box;
  height: 0;
  overflow: visible;

  &.vertical {
    border-image: initial;
    border-width: 0 0 0 1px;
    height: 100%;
  }

  &.horizontal {
    border: 0;
    border-bottom-width: 1px;
    width: 100%;
  }
`
