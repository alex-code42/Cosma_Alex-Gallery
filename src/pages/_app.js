import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout injectFirst>
    <Component {...pageProps} />
    </Layout>
  )
  
}
