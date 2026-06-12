import { render, screen } from "@testing-library/react";

import Checkout from "../pages/Checkout";

test("checkout page renders", () => {
  render(<Checkout />);

  expect(
    screen.getByText(/adoption/i)
  ).toBeInTheDocument();
});