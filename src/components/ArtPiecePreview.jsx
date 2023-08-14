import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <Image
        src={image.imageSource}
        width={360}
        height={420}
        alt={image.name}
      />
      <p>{title}</p>
      <p>Artist: {artist}</p>
    </article>
  );
}
