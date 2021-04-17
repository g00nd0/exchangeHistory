import { render, screen } from "@testing-library/react";
import CurrencyViewOne from "./CurrencyViewOne";

test("renders currency viewOneMain", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("viewOneMain");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyCode", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("currencyCode");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyName", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("currencyName");
  expect(linkElement).toBeInTheDocument();
});

test("renders getToday", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("getToday");
  expect(linkElement).toBeInTheDocument();
});

test("renders get3Days", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("get3Days");
  expect(linkElement).toBeInTheDocument();
});

test("renders get7Days", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("get7Days");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyTable", () => {
  render(<CurrencyViewOne />);
  const linkElement = screen.getByTitle("currencyTable");
  expect(linkElement).toBeInTheDocument();
});
