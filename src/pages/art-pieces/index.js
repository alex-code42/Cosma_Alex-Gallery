import ArtGallery from "@/components/ArtGallery";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function Artpieces() {
  const { data, error, isLoading } = useSWR(artURL, fetcher);
  console.log(data);

  return (
    <div>
      <h1>ArtPieces</h1>
      <br></br>
      <a href="/">Home</a>
      <br></br>
      <ArtGallery pieces={data} error={error} isLoading={isLoading} />
    </div>
  );
}
