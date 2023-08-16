import { useState } from "react";

export default function FavoriteButton({ artPiecesState, slug }) {
  if (!artPiecesState) {
    console.log("error", artPiecesState);
    return <div>loading.....</div>;
  }
  const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;

  const toggleFavorite = (imageId) => {
    setArtPiecesInfo(
      artPiecesInfo.map((piece) =>
        piece.id !== imageId
          ? piece
          : { ...piece, isFavourite: !piece.isFavourite }
      )
    );
  };

  if (!artPiecesInfo) {
    return <div>loading...</div>;
  }

  return (
    <div className="toggleButton">
      {/* <img src={image.src} alt={`Image ${image.id}`} /> */}
      <button
        data-testid="favourite-button"
        className="toggleButton__detail"
        onClick={() => toggleFavorite(slug)}
      >
        {artPiecesInfo.find((item) => item.id === slug)?.isFavourite
          ? "👍"
          : "👎"}
      </button>
    </div>
  );
}
