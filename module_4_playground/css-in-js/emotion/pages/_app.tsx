import * as React from 'react';
import App from 'next/app'
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import theme from '../theme';
import emotionNormalize from 'emotion-normalize';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return(
            <ThemeProvider theme={theme}>
                <Global
                    styles={css`
                        ${emotionNormalize}
                        body {
                            background: #8dd;
                        }
                    `}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default MyApp;