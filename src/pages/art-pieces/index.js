import ArtGallery from "@/components/ArtGallery";
import Navigation from "@/components/Navigation";

export default function Artpieces({ data, error, isLoading, artPiecesState }) {
  return (
    <div>
      <h1>ArtPieces</h1>
      <ArtGallery pieces={data} error={error} isLoading={isLoading} artPiecesState={artPiecesState}/>
    </div>
  );
}
