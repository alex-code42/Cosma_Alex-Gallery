import { Fragment } from "react";

export default function Comments({ artPiecesState, thisImage }) {
  const { artPiecesInfo } = artPiecesState;
  const comments = artPiecesInfo?.find(
    (artPiece) => artPiece.id === thisImage.slug
  )?.comments;
  const combinedElements = comments?.map((commentElement) => (
    <Fragment key={commentElement.timeStamp}>
      <p>{commentElement.timeStamp}</p>
      <p>{commentElement.comment}</p>
    </Fragment>
  ));
  return <section>{combinedElements}</section>;
}
