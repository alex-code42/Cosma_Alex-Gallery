import { useRouter } from 'next/router';
import useSWR from 'swr';
import Image from 'next/image'
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch the art pieces data using useSWR
  const { data, error } = useSWR(artURL, fetcher);


  const filteredArtist = data.find((artist) => {
    console.log("movie.slug, slug", artist.slug, slug);
    return artist.slug === slug})

    console.log("My Filtered Artist",filteredArtist)
    console.log("My Data",filteredArtist)
    console.log("My Data",filteredArtist.slug)
    console.log("Slug: ",filteredArtist.slug)
    console.log("Artist: ",filteredArtist.artist)

  
    
  return (
    <div>
      {error ? (
        <p>Error loading data</p>
      ) : !data ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* <ArtGallery pieces={data} error={error} /> */}
          {/* <p>Detail Page:</p> */}
          <p>{filteredArtist.name}</p>
          <Image
                src={filteredArtist.imageSource}
                width={450}
                height={450}
                alt="Picture of the author"
              />
          <p>Artist Name: {filteredArtist.artist.toUpperCase()}</p>
          <p>{filteredArtist.year}</p>
          <p>{filteredArtist.genre}</p>
          <Link href="/art-pieces">Back to Art Pieces</Link>
          
        </>
      )}
    </div>
  );
}
