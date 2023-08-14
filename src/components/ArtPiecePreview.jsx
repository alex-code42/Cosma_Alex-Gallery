import Image from "next/image";

export default function ArtPiecePreview({ image }) {
  return (
    <article key={image.slug}>
      <Image
        src={image.imageSource}
        width={360}
        height={360}
        alt={image.name}
      />
      <p>{image.name}</p>
      <p>Artist: {image.artist}</p>
    </article>
  );
}
