import { render, screen } from "@testing-library/react";
import CurrencyView from "./CurrencyView";

test("Render title", () => {
  render(<CurrencyView />);
  const linkElement = screen.getByText("Current-See");
  expect(linkElement).toBeInTheDocument();
});
