import ArtPieceDetails from '@/components/ArtPieceDetails';
import CommentForm from '@/components/CommentForm';
import FavoriteButton from '@/components/FavoriteButton';

export default function ShowArtPieceDetails({ image, title, artist, year, genre, artPiecesState }) {
  return (
    <div>
      <FavoriteButton artPiecesState={artPiecesState}/>
      <ArtPieceDetails image={image} title={title} artist={artist} year={year} genre={genre} />
      {/* <CommentForm/> */}
      
    </div>
  );
}
