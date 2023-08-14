import ArtGallery from "@/components/ArtGallery";

export default function Artpieces() {
  return (
    <div>
      <h1>ArtPieces</h1>
      <br></br>
      <a href="/">Home</a>
      <br></br>
      <ArtGallery pieces={data} error={error} isLoading={isLoading} />
      <nav className="nav">
        <a href="/">Spotlight</a>
        <br></br>
        <a href="/art-pieces">Art Pieces</a>
        <br></br>
        <a href="/favourites">Favourites</a>
      </nav>
    </div>
  );
}
