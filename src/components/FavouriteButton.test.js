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

test("favourite button getting displayed spotlight page", () => {
  render(<ArtGallery pieces={artPieces} />);
});
