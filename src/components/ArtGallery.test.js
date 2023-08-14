import { render, screen } from "@testing-library/react";
import ArtGallery from "./ArtGallery";

test("test if images are displayed as listitem", () => {
  render(<ArtGallery />);
  const listItem = screen.getByRole("li", { Image });
  expect(listItem).toBeInTheDocument();
});
