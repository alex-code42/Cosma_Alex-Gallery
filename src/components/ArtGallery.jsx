import ArtPiecePreview from "./ArtPiecePreview";
import FavoriteButton from "./FavoriteButton";

export default function ArtGallery({
  pieces = [],
  error,
  isLoading,
  artPiecesState,
}) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {pieces.map((image) => {
        return (
          <li key={image.slug}>
            <ArtPiecePreview
              image={image.imageSource}
              title={image.name}
              artist={image.artist}
              artPiecesState={artPiecesState}
              slug={image.slug}
            />
          </li>
        );
      })}
    </ul>
  );
}
