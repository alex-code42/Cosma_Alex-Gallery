import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("ArtPiecePreview:", image);
  return (
    <>
      <Image src={image} width={360} height={360} alt={title} />
      <p>{title}</p>
      <p>Artist: {artist}</p>
    </>
  );
}
