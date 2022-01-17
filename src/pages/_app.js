import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './globalStyle';


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
