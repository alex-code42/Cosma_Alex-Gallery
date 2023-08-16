import CommentForm from "./CommentForm";
import ArtPiecePreview from "./ArtPiecePreview";
import Comments from "@/components/Comments";
import { styled } from "styled-components";

export default function ArtPieceDetails({ thisImage, artPiecesState }) {
  const hexCode = thisImage.colors[0];

  const HexCodeWrapper = styled.section`
    background-color: ${hexCode};
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      ${thisImage.colors[0]} 0%,
      ${thisImage.colors[1]} 64%,
      ${thisImage.colors[2]} 100%
    );
    color: white;
    font-weight: 600;
    height: 10px;
    border-radius: 3px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px;
    padding-top: 4px;
    padding-bottom: 2px;
  `;

  return (
    <>
      <ArtPiecePreview
        image={thisImage.imageSource}
        title={thisImage.name}
        artist={thisImage.artist}
        artPiecesState={artPiecesState}
        slug={thisImage.slug}
        colors={thisImage.colors[0]}
      />
      <p>{thisImage.year}</p>
      <p>{thisImage.genre}</p>
      <HexCodeWrapper />

      <CommentForm artPiecesState={artPiecesState} slug={thisImage.slug} />
      <Comments artPiecesState={artPiecesState} thisImage={thisImage} />
    </>
  );
}
