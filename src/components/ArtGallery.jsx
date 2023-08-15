import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtGallery({ pieces = [], error, isLoading, artPiecesState }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pieces);

  return (
    <div>
      {pieces.map((image) => {
        return (
          <div>
        
          <Link href="/art-pieces/[slug]" as={`/art-pieces/${image.slug}`}>
          <ArtPiecePreview
            key={image.slug}
            image={image.imageSource}
            title={image.name}
            artist={image.artist}
            artPiecesState={artPiecesState}
          />
          </Link>
          </div>
        );
      })}
    </div>
  );
}
