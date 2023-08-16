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
