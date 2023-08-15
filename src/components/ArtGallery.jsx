import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtGallery({ pieces = [], error, isLoading }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pieces);

  return (
    <ul>
      {pieces.map((image) => {
        return (
<<<<<<< HEAD
          <li key={image.slug}>
            <ArtPiecePreview
              image={image.imageSource}
              title={image.name}
              artist={image.artist}
            />
          </li>
=======
          <div>
        
          <Link href="/art-pieces/[slug]" as={`/art-pieces/${image.slug}`}>
          <ArtPiecePreview
            key={image.slug}
            image={image.imageSource}
            title={image.name}
            artist={image.artist}
          />
          </Link>
          </div>
>>>>>>> main
        );
      })}
    </ul>
  );
}
