import {
  getAllByTestId,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import useSWR from "swr";
import Spotlight from "./Spotlight";
import ArtGallery from "./ArtGallery";
import Favourites from "@/pages/favourites";
import { artPieces } from "./ArtGallery.test";
import ArtPiecePreview from "./ArtPiecePreview";
import FavoriteButton from "./FavoriteButton";

const mockArtPiecesInfo = [
  {
    id: "orange-red-and-green",
    isFavourite: false,
    comments: [],
  },
  {
    id: "blue-and-red",
    isFavourite: false,
    comments: [],
  },
  {
    id: "clay-bust-sculptures",
    isFavourite: false,
    comments: [],
  },
  {
    id: "bread-and-fruits",
    isFavourite: false,
    comments: [],
  },
  {
    id: "kiwi-juice-on-glass",
    isFavourite: false,
    comments: [],
  },
  {
    id: "silhouette-of-trees",
    isFavourite: false,
    comments: [],
  },
  {
    id: "split-shot-of-whale",
    isFavourite: false,
    comments: [],
  },
  {
    id: "body-of-water",
    isFavourite: false,
    comments: [],
  },
  {
    id: "man-digital-illustration",
    isFavourite: false,
    comments: [],
  },
  {
    id: "woman-statue",
    isFavourite: false,
    comments: [],
  },
  {
    id: "majestic-greek-sculpture",
    isFavourite: false,
    comments: [],
  },
];

const mockSlug = "body-of-water";

test("favourite button getting displayed spotlight page", () => {
  render(
    <ArtPiecePreview
      image={artPieces[0].imageSource}
      title={artPieces[0].name}
      artist={artPieces[0].artist}
      slug={mockSlug}
      artPiecesState={{
        artPiecesInfo: mockArtPiecesInfo,
        setArtPiecesInfo: () => {},
      }}
    />
  );
  const favButton = screen.getByTestId("favourite-button");
  //   console.log(list.children.getByRole("div"));
  //   const favButton = elements.getByRole("button");
  expect(favButton).toBeInTheDocument();
});

// test("favourite button getting displayed spotlight page", () => {
//   const user = userEvent.setup();
//   render(
//     <FavoriteButton
//       slug={mockSlug}
//       artPiecesState={{
//         artPiecesInfo: mockArtPiecesInfo,
//         setArtPiecesInfo: () => {},
//       }}
//     />
//   );
// });
