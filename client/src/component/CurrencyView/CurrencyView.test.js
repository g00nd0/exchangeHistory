import { render, screen } from "@testing-library/react";
import CurrencyView from "./CurrencyView";

test("Render instruction", () => {
  render(<CurrencyView />);
  const linkElement = screen.getByTitle("instruction");
  expect(linkElement).toBeInTheDocument();
});
test("Render container", () => {
  render(<CurrencyView />);
  const linkElement = screen.getByTitle("container");
  expect(linkElement).toBeInTheDocument();
});
test("Render renderCards", () => {
  render(<CurrencyView />);
  const linkElement = screen.getByTitle("renderCards");
  expect(linkElement).toBeInTheDocument();
});
