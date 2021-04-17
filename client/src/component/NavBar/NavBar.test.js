import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("Render navbar", () => {
  render(<NavBar />);
  const linkElement = screen.getByTitle("navbar");
  expect(linkElement).toBeInTheDocument();
});

test("Render title", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Current-See");
  expect(linkElement).toBeInTheDocument();
});

test("Render Base Currency title", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Base Currency");
  expect(linkElement).toBeInTheDocument();
});

test("Render Dropdown menu for Base Currency Select", () => {
  render(<NavBar />);
  const linkElement = screen.getByTitle("searchBar");
  expect(linkElement).toBeInTheDocument();
});
