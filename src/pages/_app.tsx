import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { axeAcessiblityReporter } from '../untils/axeAcessibilityReports'
import { useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAcessiblityReporter()
  }, [])
  return <Component {...pageProps} />
}
