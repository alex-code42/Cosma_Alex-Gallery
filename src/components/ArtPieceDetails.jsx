import { useRouter } from 'next/router';
import useSWR from 'swr';
import Image from 'next/image'
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const artURL = "https://example-apis.vercel.app/api/art";

export default function ArtPieceDetails() {
    const router = useRouter();
    const { slug } = router.query;
  
    // Fetch the art pieces data using useSWR
    const { data, error, isLoading } = useSWR(artURL, fetcher);
  
    if (error) {
        return <div>Error loading data</div>;
      }
    
      if (isLoading) {
        return(
            <p>Is Loading</p>
        )
      }
  
    const filteredArtist = data?.find((artist) => artist.slug === slug);
  
    if (filteredArtist) {
      console.log("Matching artist:", filteredArtist.slug, slug);
      
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
            <button className='detailButton'>
                <Link href="/art-pieces">Back to Art Pieces</Link>
            </button>
            
          </>
        )}
      </div>
    );
} else {
  console.log('Artist not found');
  return <div>Artist not found...</div>;
}
}
