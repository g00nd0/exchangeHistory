import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

test("renders currency card", () => {
  render(<Pagination />);
  const linkElement = screen.getByTitle("pagination");
  expect(linkElement).toBeInTheDocument();
});
