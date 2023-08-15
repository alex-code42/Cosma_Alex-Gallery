import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArtPiecePreview from "./ArtPiecePreview";
import { artPieces } from "./ArtGallery.test.js";
import { swr } from "swr";

// test("test if image title exists", () => {
//   render(
//     <ArtPiecePreview
//       image={
//         "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
//       }
//       title={"Orange Red and Green Abstract Painting"}
//       artist={"Steve Johnson"}
//     />
//   );
//   const imageAlt = screen.getByAltText(testImage.name);
//   expect(imageAlt).toHaveProperty(
//     "src",
//     "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
//   );
// });

// test("test if image artist exists", () => {
//   render(
//     <ArtPiecePreview
//       image={artPieces[0].imageSource}
//       title={artPieces[0].name}
//       artist={artPieces[0].artist}
//     />
//   );
//   const imageAlt = screen.getByAltText(artPieces[0].name);
//   expect(imageAlt).toBeInTheDocument();
// });

// test("test if image source exists", () => {
//   render(
//     <ArtPiecePreview
//       image={artPieces[0].imageSource}
//       title={artPieces[0].name}
//       artist={artPieces[0].artist}
//     />
//   );
//   const imageAlt = screen.getByAltText(artPieces[0].name);
//   expect(imageAlt).toBeInTheDocument();
// });
