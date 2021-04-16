import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("Render title", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Current-See");
  expect(linkElement).toBeInTheDocument();
});

test("Render Button for Currencies", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Currencies");
  expect(linkElement).toBeInTheDocument();
});

test("Render Dropdown menu for Base Currency Select", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Base");
  expect(linkElement).toBeInTheDocument();
});
