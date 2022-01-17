import { createGlobalStyle } from 'styled-components';

/*
  Color Pallete 
  https://colordesigner.io/#F07724-24F077-7724F0-8C8C97-453D37
*/

export const theme = {
  colors: {
    primary: {
      lightest: '#fce4d3',
      light: '#f6ad7c',
      base: '#F07724',
      dark: '#9b450b',
      darkest: '#341704',
    },
    secondary: {
      lightest: '#d3fce4',
      light: '#7cf6ad',
      base: '#24F077',
      dark: '#0b9b45',
      darkest: '#043417',
    },
    tertiary: {
      lightest: '#e4d3fc',
      light: '#ad7cf6',
      base: '#7724F0',
      dark: '#450b9b',
      darkest: '#170434',
    },
    gray: {
      lightest: '#F7F7F8',
      light: '#C1C1C7',
      base: '#8C8C97',
      dark: '#595963',
      darkest: '#29292E',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    primary: 'Roboto Mono',
    secondary: 'Inter',
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font: 400 1rem ${theme.fonts.secondary}, sans-serif;
    color: ${theme.colors.gray.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: ${theme.fonts.primary}, sans-serif;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`