import DefaultLayout from "@/layouts/default/default-layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
    </DefaultLayout>
  )
}

export default MyApp
