import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <article>
      <Image src={image} width={360} height={360} alt={title} />
      <p>{title}</p>
      <p>Artist: {artist}</p>
    </article>
  );
}
