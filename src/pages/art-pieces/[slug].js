import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ShowArtPieceDetails({ data, artPiecesState }) {
  const router = useRouter();
  const { slug } = router.query;
  const thisImage = data.find((item) => item.slug === slug);
  return (
    <div className="abstand">
      <ArtPieceDetails thisImage={thisImage} artPiecesState={artPiecesState} />
    </div>
  );
}
