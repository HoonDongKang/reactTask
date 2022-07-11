import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/GlobalStyle'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <Reset />
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer theme='dark' />
        </>
    )
}

export default MyApp
