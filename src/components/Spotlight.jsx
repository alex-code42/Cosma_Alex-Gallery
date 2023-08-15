import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ data, artPiecesState }) {
  const spotlight = data[Math.floor(Math.random() * 11)];
  return (
    <ArtPiecePreview
      image={spotlight.imageSource}
      title={spotlight.name}
      artist={spotlight.artist}
      artPiecesState={artPiecesState}
      slug={spotlight.slug}
    />

    // <article>
    //   <Image src={image} width={360} height={360} alt={title} />
    //   <p>{title}</p>
    //   <p>Artist: {artist}</p>
    // </article>
  );
}
