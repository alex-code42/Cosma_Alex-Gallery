import {
  getAllByTestId,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import ArtGallery from "./ArtGallery";
import "@testing-library/jest-dom";
import useSWR from "swr";
import { artPieces } from "./ArtGallery.test";

test("All art pieces images are displayed", async () => {
  useSWR.mockReturnValue({ data: artPieces, isLoading: false, error: false });
  render(<ArtGallery pieces={artPieces} />);
  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("img");
  expect(list).toBeInTheDocument();
  expect(items.length).toBe(artPieces.length);
});
