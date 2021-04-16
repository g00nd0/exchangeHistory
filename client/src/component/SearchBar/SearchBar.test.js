import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("Render title", () => {
  render(<SearchBar />);
  const linkElement = screen.getByTitle("dropdown for base currency");
  expect(linkElement).toBeInTheDocument();
});
