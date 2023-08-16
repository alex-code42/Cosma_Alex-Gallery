import "@/styles/globals.css";
import Layout from "@/components/layout";
import useSWR from "swr";
import React, { useEffect } from "react";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(artURL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  useEffect(() => {
    if (typeof artPiecesInfo[0] !== "undefined") {
      return;
    }
    if (data) {
      const updatedArtPiecesInfo = data.map((artPiece) => ({
        id: artPiece.slug,
        isFavourite: false,
        comments: [],
      }));
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout injectFirst>
      <Component
        {...pageProps}
        data={data}
        error={error}
        isLoading={isLoading}
        artPiecesState={{
          artPiecesInfo: artPiecesInfo,
          setArtPiecesInfo: setArtPiecesInfo,
        }}
      />
    </Layout>
  );
}
