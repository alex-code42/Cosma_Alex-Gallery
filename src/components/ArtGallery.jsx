import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function ArtGallery() {
  const { data, error, isLoading } = useSWR(artURL, fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return data.map((imageData) => {
    return (
      <article key={imageData.slug}>
        <Image
          src={imageData.imageSource}
          width={360}
          height={360}
          alt={imageData.name}
        />
        <p>{imageData.name}</p>
        <p>Artist: {imageData.artist}</p>
      </article>
    );
  });
}
