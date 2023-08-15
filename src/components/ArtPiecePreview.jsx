import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  artPiecesState,
  slug,
}) {
  console.log("artpiecepreview image prop:", image);
  return (
    <>
      <FavoriteButton artPiecesState={artPiecesState} slug={slug} />
      <Link href="/art-pieces/[slug]" as={`/art-pieces/${slug}`}>
        <Image src={image} width={360} height={360} alt={title} />
      </Link>

      <p data-testid="title">{title}</p>
      <span>Artist: </span>
      <span data-testid="artist">{artist}</span>
    </>
  );
}
