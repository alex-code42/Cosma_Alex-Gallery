import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtGallery({ pieces = [], error, isLoading }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pieces);

  return (
    <ul>
      {pieces.map((image) => {
        return (
          <ArtPiecePreview
            key={image.slug}
            image={image.imageSource}
            title={image.name}
            artist={image.artist}
          />
        );
      })}
    </ul>
  );
}
