import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtGallery({ pieces = [], error, isLoading, artPiecesState }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pieces);

  return (
    <ul>
      {pieces.map((image) => {
        return (
<<<<<<< HEAD
          <li key={image.slug}>
            <Link href="/art-pieces/[slug]" as={`/art-pieces/${image.slug}`}>
              <ArtPiecePreview
                image={image.imageSource}
                title={image.name}
                artist={image.artist}
              />
            </Link>
          </li>
=======
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
>>>>>>> 70774c8856150ce5d9ff62fde8eefe9f86764add
        );
      })}
    </ul>
  );
}
