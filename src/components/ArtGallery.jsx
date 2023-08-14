import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function ArtGallery() {
  const { data, error, isLoading } = useSWR(artURL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return <div>{data[0].slug}</div>;
}
