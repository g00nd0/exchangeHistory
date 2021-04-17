import { render, screen } from "@testing-library/react";
import CurrencyCard from "./CurrencyCard";

test("renders currency card link", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("linkToCurrency");
  expect(linkElement).toBeInTheDocument();
});

test("renders cardTitle", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("cardTitle");
  expect(linkElement).toBeInTheDocument();
});

test("renders cardBodyContainer", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("cardBodyContainer");
  expect(linkElement).toBeInTheDocument();
});

test("renders innerBodyContainer", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("innerBodyContainer");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyCode", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("currencyCode");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyInfo", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("currencyInfo");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyName", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("currencyName");
  expect(linkElement).toBeInTheDocument();
});

test("renders currencyRate", () => {
  render(<CurrencyCard />);
  const linkElement = screen.getByTitle("currencyRate");
  expect(linkElement).toBeInTheDocument();
});
