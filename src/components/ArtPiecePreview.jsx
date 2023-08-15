import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("ArtPiecePreview:", image);
  return (
    <>
      <Image src={image} width={360} height={360} alt={title} />
      <p data-testid="title">{title}</p>
      <span>Artist: </span>
      <span data-testid="artist">{artist}</span>
    </>
  );
}
