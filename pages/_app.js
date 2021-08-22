import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import "../styles/modal.scss"
import Head from 'next/head'
import Layout from "../components/layout/layout"
import { HeaderContextProvider } from "../components/context/headerContex"

function MyApp({ Component, pageProps }) {
  return (
    <HeaderContextProvider>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeaderContextProvider>
  )
}

export default MyApp
