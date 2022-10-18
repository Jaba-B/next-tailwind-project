import Header from '../components/Header'
import Footer from '../components/Footer.tsx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
