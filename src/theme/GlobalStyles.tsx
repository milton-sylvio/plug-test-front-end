import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${ props => props.theme.colors.gray };
    color: ${ props => props.theme.colors.black };
    font-size: ${ props => props.theme.fonts.sizes[2] };
  }
  
  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a,
  button,
  select { 
    cursor: pointer;
  }

  strong,
  .strong {
    font-weight: ${ props => props.theme.fonts.weights.bold };
  }

  input, 
  textarea, 
  select {
    background-image: none;
    box-sizing: border-box;
    outline: none;
    font-family: inherit;
  }
  input, 
  textarea {
    -webkit-appearance: none;
  }

  button,
  input[type="button"] {
    border: 0;
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${ props => props.theme.fonts.weights.bold };
    font-family: inherit;
  }

  h1 {
    font-size: ${ props => props.theme.fonts.sizes[5] };
  }

  a {
    color: ${ props => props.theme.colors.primary };
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .text-center {
    text-align: center;
  }
`