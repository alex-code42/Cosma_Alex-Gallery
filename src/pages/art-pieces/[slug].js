import ArtPieceDetails from '@/components/ArtPieceDetails';
import CommentForm from '@/components/CommentForm';

export default function ShowArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <ArtPieceDetails image={image} title={title} artist={artist} year={year} genre={genre} />
      {/* <CommentForm/> */}
    </div>
  );
}
