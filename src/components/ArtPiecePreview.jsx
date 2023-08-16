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
  return (
    <>
      <FavoriteButton artPiecesState={artPiecesState} slug={slug} />
      <Link href="/art-pieces/[slug]" as={`/art-pieces/${slug}`}>
        <Image
          data-testid="image"
          src={image}
          width={360}
          height={360}
          alt={title}
          layout="responsive" 
          maxWidth={360}
        />
      </Link>

      <p className="picture__title" data-testid="title">{title}</p>
      <span>Artist: </span>
      <span className="picture__artist" data-testid="artist">{artist}</span>
    </>
  );
}
