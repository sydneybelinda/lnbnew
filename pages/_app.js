// import '../public/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/animate.min.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-image-lightbox/style.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import Layout from '../components/_App/Layout';

import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
        <Layout>
      <Component {...pageProps}/>
      </Layout>
    </SessionProvider>
  )
}




