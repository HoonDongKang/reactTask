import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/GlobalStyle'
import Head from 'next/head'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    httpEquiv='Content-Security-Policy'
                    content='upgrade-insecure-requests'
                />
                <meta charSet='utf-8' />
            </Head>
            <Reset />
            <GlobalStyle />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <ToastContainer theme='dark' />
        </>
    )
}

export default MyApp
