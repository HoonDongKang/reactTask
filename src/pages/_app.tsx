import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Reset />
            <Component {...pageProps} />
            <ToastContainer theme='dark' />
        </>
    )
}

export default MyApp
