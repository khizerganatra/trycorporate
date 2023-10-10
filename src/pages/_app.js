import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return  (
    <>
  <Head>
    {/* Include Google Fonts links here */}
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=EB+Garamond&family=Caveat&family=Montserrat&family=Martel+Sans:wght@200&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
</>
  )
}
