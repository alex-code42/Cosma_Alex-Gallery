import ArtGallery from "@/components/ArtGallery";

export default function Favourites({ data, artPiecesState, error, isLoading }) {
  const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;

  const favourites = data.filter(
    (item) => artPiecesInfo.find((fav) => fav.id === item.slug)?.isFavourite
  );
  console.log("favourites", favourites);
  return (
    <div>
      <h1>Favourites</h1>
      <br></br>
      <ArtGallery
        pieces={favourites}
        error={error}
        isLoading={isLoading}
        artPiecesState={artPiecesState}
      />
    </div>
  );
}
