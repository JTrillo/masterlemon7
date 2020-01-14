import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    body{
        background-color: #ddd;
    }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

//Copiado de: https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_app.js