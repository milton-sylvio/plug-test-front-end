import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    radii: {
      small: string
      normal: string
      large: string 
      rounded: string
    }
    colors: {
      black: string
      white: string
      gray: string
      blue: string
      primary: string
      grayDarker: string
      // secondary: string
      // success: string
      // info: string
      // warning: string
      // danger: string
    }
    fonts: {
      sizes: string[]
      weights: {
        normal: number
        bold: number    
      }
      lineHeights: {
        condensedUltra: number
        condensed: number
        default: number
      }
    }
    // space: string[]
    // sizes: {
    //   large: string
    //   medium: string
    //   small: string
    // }
    // backoundColor: string
    // textColor: string
    // card: string
    // scrollbar: {
    //   thumb: string
    //   track: string
    // }
    // // dropdown: string  
    // aside: string
    // header: string
    // input: {
    //   borderColor: string
    //   bg: string
    //   color: string
    // }
  }
}