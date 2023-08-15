import ArtGallery from "@/components/ArtGallery";
import Navigation from "@/components/Navigation";

export default function Artpieces({ data, error, isLoading }) {
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
