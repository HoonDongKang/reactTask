import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/GlobalStyle'
import Head from 'next/head'
import { store } from '../store/store'
import { Provider } from 'react-redux'

declare global {
    interface Window {
        Kakao: any
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        try {
            if (!window.Kakao.isInitialized() && window.Kakao) {
                window.Kakao.init('7b0410f23521dc194d4eb48fa116b9ce')
            }
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <>
            <Head>
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
