import ArtPieceDetails from "@/components/ArtPieceDetails";
import CommentForm from "@/components/CommentForm";
import FavoriteButton from "@/components/FavoriteButton";

export default function ShowArtPieceDetails({ data, artPiecesState }) {
  const { image, title, artist, year, genre } = data;
  return (
    <div>
      <ArtPieceDetails data={data} artPiecesState={artPiecesState} />
      {/* <CommentForm/> */}
    </div>
  );
}

// image,
//   title,
//   artist,
//   year,
//   genre,
//   artPiecesState,
