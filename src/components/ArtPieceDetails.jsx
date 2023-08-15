import { useRouter } from "next/router";
import CommentForm from "./CommentForm";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceDetails({ data, artPiecesState }) {
  const router = useRouter();
  const { slug } = router.query;
  const thisImage = data.find((item) => item.slug === slug);
  return (
    <>
      <ArtPiecePreview
        image={thisImage.imageSource}
        title={thisImage.name}
        artist={thisImage.artist}
        artPiecesState={artPiecesState}
        slug={thisImage.slug}
      />
      <p>{thisImage.year}</p>
      <p>{thisImage.genre}</p>
      <CommentForm artPiecesState={artPiecesState} slug={thisImage.slug} />
    </>
  );
}
