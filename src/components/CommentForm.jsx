export default function CommentForm({ slug, artPiecesState }) {
  const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;
  if (!artPiecesInfo) {
    return <div>loading</div>;
  }
  console.log("wtf:", artPiecesInfo);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit:", artPiecesInfo);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data", data.comment);
    await setArtPiecesInfo(
      artPiecesInfo.map((infoElement) => {
        if (infoElement.id !== slug) {
          return infoElement;
        } else {
          const today = new Date();
          const timeStamp = `${today.getMinutes()}:${today.getHours()} - ${today.getDate()}.${
            today.getMonth() + 1
          }.${today.getFullYear()}`;

          const output = [
            ...infoElement.comments,
            { comment: data.comment, timeStamp: timeStamp },
          ];

          //   infoElement.comments.push(data.comment);
          return { ...infoElement, comments: output };
        }
      })
    );
    event.target.reset();
  }
  return (
    <form
      className="myComment__Form"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <label htmlFor="comment">Comment:</label>
      <textarea type="text" cols={35} rows={4} id="comment" name="comment" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
