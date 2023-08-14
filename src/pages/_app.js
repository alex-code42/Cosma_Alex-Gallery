import "@/styles/globals.css";
import Layout from "@/components/layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(artURL, fetcher);
  return (
    <Layout injectFirst>
      <Component
        {...pageProps}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </Layout>
  );
}
