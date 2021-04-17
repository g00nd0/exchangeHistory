import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("Render dropdown component", () => {
  render(<SearchBar />);
  const linkElement = screen.getByTitle("dropdown for base currency");
  expect(linkElement).toBeInTheDocument();
});

test("Render dropdownSelected", () => {
  render(<SearchBar />);
  const linkElement = screen.getByTitle("dropdownSelected");
  expect(linkElement).toBeInTheDocument();
});

test("Render dropdownMenu", () => {
  render(<SearchBar />);
  const linkElement = screen.getByTitle("dropdownMenu");
  expect(linkElement).toBeInTheDocument();
});
