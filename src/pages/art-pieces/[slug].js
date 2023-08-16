import ArtPieceDetails from "@/components/ArtPieceDetails";
import FavoriteButton from "@/components/FavoriteButton";

export default function ShowArtPieceDetails({ data, artPiecesState }) {
  const { image, title, artist, year, genre } = data;
  return (
    <div>
      <ArtPieceDetails data={data} artPiecesState={artPiecesState} />
    </div>
  );
}
