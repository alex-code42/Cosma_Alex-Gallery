export default function Comments({ artPiecesState, thisImage }) {
  const { artPiecesInfo } = artPiecesState;
  const comments = artPiecesInfo?.find(
    (artPiece) => artPiece.id === thisImage.slug
  )?.comments;
  const combinedElements = comments?.map((commentElement) => (
    <>
      <p>{commentElement.timeStamp}</p>
      <p>{commentElement.comment}</p>
    </>
  ));
  return <section>{combinedElements}</section>;
}
