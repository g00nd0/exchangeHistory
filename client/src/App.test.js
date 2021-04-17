import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main app component", () => {
  render(<App />);
  const linkElement = screen.getByTitle("Current-See App");
  expect(linkElement).toBeInTheDocument();
});

test("renders CurrencyView", () => {
  render(<App />);
  const linkElement = screen.getByTitle("CurrencyView");
  expect(linkElement).toBeInTheDocument();
});

test("renders ViewOne", () => {
  render(<App />);
  const linkElement = screen.getByTitle("ViewOne");
  expect(linkElement).toBeInTheDocument();
});
