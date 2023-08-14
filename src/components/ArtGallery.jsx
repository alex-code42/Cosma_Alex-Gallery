import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function ArtGallery() {
  const { data, error, isLoading } = useSWR(artURL, fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data.map((image) => {
        return <ArtPiecePreview image={image} />;
      })}
    </div>
  );
}
