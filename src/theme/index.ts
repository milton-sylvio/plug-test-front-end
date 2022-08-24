import { DefaultTheme } from 'styled-components'

import colors from  './colors'
import fonts from  './fonts'

const theme: DefaultTheme = {
  radii: {
    small: '4px',
    normal: '6px',
    large: '8px', 
    rounded: '50%',
  },
  
  colors,
  fonts,
}

export default theme
export { colors }