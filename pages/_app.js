import 'antd/dist/antd.css';
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Layout from "../components/layout/layout"
import { HeaderContextProvider } from "../components/context/headerContex"

function MyApp({ Component, pageProps }) {
  return (
    <HeaderContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeaderContextProvider>
  )
}

export default MyApp
